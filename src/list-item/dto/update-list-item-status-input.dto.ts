import { ApiProperty } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'
import { LIST_ITEM_STATUS } from 'common/enums'

export class UpdateListItemStatusInputDto {
  @ApiProperty({
    type: 'string',
    enum: LIST_ITEM_STATUS,
    description: 'The status of the list item',
  })
  @IsEnum(LIST_ITEM_STATUS)
  status: (typeof LIST_ITEM_STATUS)[keyof typeof LIST_ITEM_STATUS]
}
