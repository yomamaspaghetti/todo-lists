import { ApiProperty } from '@nestjs/swagger'

class GetListWithItemsItemDto {
  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The id of the item',
  })
  id: number

  @ApiProperty({
    type: 'string',
    example: 'Item 1',
    description: 'The title of the item',
  })
  title: string

  @ApiProperty({
    type: 'string',
    example: 'Item 1 description',
    description: 'The description of the item',
  })
  description: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The due at date of the item',
  })
  dueAtUtc: string

  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The user id of the item',
  })
  userId: number

  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The list id of the item',
  })
  listId: number

  @ApiProperty({
    type: 'string',
    example: 'PENDING',
    description: 'The status of the item',
  })
  status: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The created at date of the item',
  })
  createdAtUtc: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The updated at date of the item',
  })
  updatedAtUtc: string
}

export class GetListWithItemsDto {
  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The id of the list',
  })
  id: number

  @ApiProperty({
    type: 'string',
    example: 'Shopping list',
    description: 'The name of the list',
  })
  name: string

  @ApiProperty({
    type: [GetListWithItemsItemDto],
    example: [
      {
        id: 1,
        title: 'Milk',
        description: '2% milk',
        dueAtUtc: '2024-11-11T14:03:35.758Z',
        userId: 1,
        listId: 1,
        status: 'PENDING',
        createdAtUtc: '2024-11-09T13:18:18.829Z',
        updatedAtUtc: '2024-11-09T13:18:18.829Z',
      },
    ],
    description: 'The items of the list',
  })
  items: GetListWithItemsItemDto[]

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The created at date of the list',
  })
  createdAtUtc: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The updated at date of the list',
  })
  updatedAtUtc: string
}
