import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { ListService } from 'list/list.service'

@Injectable()
export class IsListOwnerGuard implements CanActivate {
  constructor(private readonly listService: ListService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const listId = parseInt(request.params.id)
    const userId = request.user.id

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
}
