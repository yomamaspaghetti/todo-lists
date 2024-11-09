import { PartialType } from '@nestjs/swagger'
import { CreateListInputDto } from './create-list-input.dto'

export class UpdateListInputDto extends PartialType(CreateListInputDto) {}
