import { ApiProperty } from '@nestjs/swagger'

export class GetListDto {
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
