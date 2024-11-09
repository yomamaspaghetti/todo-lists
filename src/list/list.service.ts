import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Equal, Repository } from 'typeorm'
import { List } from './entities/list.entity'
import { CreateListInputDto } from './dto/create-list-input.dto'
import { UpdateListInputDto } from './dto/update-list-input.dto'
import { ShareListInputDto } from './dto/share-list-input.dto'
import { UserService } from 'user/user.service'
import { Request } from 'express'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { GetListDto } from './dto/get-list.dto'
import { GetListWithItemsDto } from './dto/get-list-with-items.dto'

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
    private readonly userService: UserService
  ) {}

  async findById(id: number): Promise<GetListDto> {
    const list = await this.listRepository.findOneBy({ id: Equal(id) })

    if (!list) {
      throw new NotFoundException(`List with ID ${id} not found`)
    }

    return list
  }

  async findByIdWithItems(id: number): Promise<GetListWithItemsDto> {
    const listWithItems = await this.listRepository.findOne({
      where: { id: Equal(id) },
      relations: {
        items: true,
      },
    })

    if (!listWithItems) {
      throw new NotFoundException(`List with ID ${id} not found`)
    }

    return listWithItems
  }

  async create(
    input: CreateListInputDto,
    req: Request
  ): Promise<CreateListDto> {
    const list = this.listRepository.create({ ...input, users: [req.user] })

    return this.listRepository.save(list)
  }

  async update(id: number, input: UpdateListInputDto): Promise<UpdateListDto> {
    await this.listRepository.update({ id: Equal(id) }, input)

    return this.findById(id)
  }

  async remove(id: number): Promise<boolean> {
    await this.listRepository.delete({ id: Equal(id) })

    return true
  }

  async shareList(id: number, input: ShareListInputDto): Promise<boolean> {
    const list = await this.listRepository.findOne({
      where: { id: Equal(id) },
      relations: { users: true },
    })

    const user = await this.userService.findById(input.userId)

    if (!user) {
      throw new NotFoundException(`User with ID ${input.userId} not found`)
    }

    const isAlreadyShared = list.users.some(({ id }) => id === user.id)

    if (isAlreadyShared) {
      throw new ConflictException(`List is already shared with user ${user.id}`)
    }

    list.users = [...(list.users ?? []), user]
    await this.listRepository.save(list)

    return true
  }

  async isOwner(listId: number, userId: number): Promise<boolean> {
    const list = await this.listRepository.findOneBy({
      id: Equal(listId),
      users: {
        id: Equal(userId),
      },
    })

    return Boolean(list)
  }
}
