import { PartialType } from '@nestjs/swagger'
import { CreateListItemInputDto } from './create-list-item-input.dto'

export class UpdateListItemInputDto extends PartialType(
  CreateListItemInputDto
) {}
