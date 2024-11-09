import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { ListItemService } from 'list-item/list-item.service'
import { ListService } from 'list/list.service'

@Injectable()
export class IsListItemListOwnerGuard implements CanActivate {
  constructor(
    private readonly listItemService: ListItemService,
    private readonly listService: ListService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const userId = request.user.id

    // For create endpoint, listId is in params
    const listIdParam = request.params.listId
    if (listIdParam) {
      const listId = parseInt(listIdParam)

      if (Number.isNaN(listId)) {
        throw new BadRequestException('Incorrect type for listId parameter')
      }

      const list = await this.listService.findById(listId)

      if (!list) {
        throw new NotFoundException(`List with ID ${listId} not found`)
      }

      const isOwner = await this.listService.isOwner(listId, userId)

      if (!isOwner) {
        throw new ForbiddenException('Only list owner can perform this action')
      }

      return true
    }

    // For other endpoints, we need to get listId from the list item
    const listItemId = parseInt(request.params.id)

    if (Number.isNaN(listItemId)) {
      throw new BadRequestException('Incorrect type for id parameter')
    }

    const listItem = await this.listItemService.findById(listItemId)

    if (!listItem) {
      throw new NotFoundException(`List item with ID ${listItemId} not found`)
    }

    const isOwner = await this.listService.isOwner(listItem.listId, userId)

    if (!isOwner) {
      throw new ForbiddenException('Only list owner can perform this action')
    }

    return true
  }
}
