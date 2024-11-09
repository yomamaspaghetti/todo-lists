import { ApiProperty } from '@nestjs/swagger'
import { LIST_ITEM_STATUS } from 'common/enums'

export class CreateListItemDto {
  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The id of the list item',
  })
  id: number

  @ApiProperty({
    type: 'string',
    example: 'Milk',
    description: 'The title of the list item',
  })
  title: string

  @ApiProperty({
    type: 'string',
    example: '2% milk',
    description: 'The description of the list item',
  })
  description: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-12T14:26:26.180Z',
    description: 'The due date of the list item',
  })
  dueAtUtc: string

  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The id of the user',
  })
  userId: number

  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The id of the list',
  })
  listId: number

  @ApiProperty({
    enum: LIST_ITEM_STATUS,
    example: LIST_ITEM_STATUS.PENDING,
    description: 'The status of the list item',
  })
  status: (typeof LIST_ITEM_STATUS)[keyof typeof LIST_ITEM_STATUS]

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:28:51.621Z',
    description: 'The created date of the list item',
  })
  createdAtUtc: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:28:51.621Z',
    description: 'The updated date of the list item',
  })
  updatedAtUtc: string
}
