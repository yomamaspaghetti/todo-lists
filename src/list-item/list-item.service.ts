import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Equal, Repository } from 'typeorm'
import { ListItem } from './entities/list-item.entity'
import { CreateListItemInputDto } from './dto/create-list-item-input.dto'
import { UpdateListItemInputDto } from './dto/update-list-item-input.dto'
import { UpdateListItemStatusInputDto } from './dto/update-list-item-status-input.dto'
import { LIST_ITEM_STATUS } from 'common/enums'
import { Request } from 'express'
import { isPast } from 'date-fns'
import { CreateListItemDto } from './dto/create-list-item.dto'
import { GetListItemDto } from './dto/get-list-item.dto'
import { UpdateListItemDto } from './dto/update-list-item.dto'
import { UpdateListItemStatusDto } from './dto/update-list-item-status.dto'

@Injectable()
export class ListItemService {
  constructor(
    @InjectRepository(ListItem)
    private readonly listItemRepository: Repository<ListItem>
  ) {}

  async findById(id: number): Promise<GetListItemDto> {
    const list = await this.listItemRepository.findOneBy({ id: Equal(id) })

    if (!list) {
      throw new NotFoundException(`List item with ID ${id} not found`)
    }

    return list
  }

  async create(
    listId: number,
    input: CreateListItemInputDto,
    req: Request
  ): Promise<CreateListItemDto> {
    if (input.dueAtUtc && isPast(input.dueAtUtc)) {
      throw new BadRequestException('Due date cannot be in the past')
    }

    const listItem = this.listItemRepository.create({
      ...input,
      listId,
      userId: req.user.id,
      status: LIST_ITEM_STATUS.PENDING,
    })

    return this.listItemRepository.save(listItem)
  }

  async update(
    id: number,
    input: UpdateListItemInputDto
  ): Promise<UpdateListItemDto> {
    if (input.dueAtUtc && isPast(input.dueAtUtc)) {
      throw new BadRequestException('Due date cannot be in the past')
    }

    await this.listItemRepository.update({ id: Equal(id) }, input)

    return this.findById(id)
  }

  async remove(id: number): Promise<boolean> {
    await this.listItemRepository.delete({ id: Equal(id) })

    return true
  }

  async updateStatus(
    id: number,
    input: UpdateListItemStatusInputDto
  ): Promise<UpdateListItemStatusDto> {
    await this.listItemRepository.update(
      { id: Equal(id) },
      { status: input.status }
    )

    return this.findById(id)
  }
}
