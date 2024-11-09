import { ApiProperty } from '@nestjs/swagger'

class CreateListUserDto {
  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'The id of the user',
  })
  id: number

  @ApiProperty({
    type: 'string',
    example: 'test@test.com',
    description: 'The email of the user',
  })
  email: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The created at date of the user',
  })
  createdAtUtc: string

  @ApiProperty({
    type: 'string',
    example: '2024-11-09T13:03:50.290Z',
    description: 'The updated at date of the user',
  })
  updatedAtUtc: string
}

export class CreateListDto {
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
    type: [CreateListUserDto],
    example: [
      {
        id: 1,
        email: 'test@test.com',
        createdAtUtc: '2024-11-09T13:03:50.290Z',
        updatedAtUtc: '2024-11-09T13:03:50.290Z',
      },
    ],
    description: 'The users of the list',
  })
  users: CreateListUserDto[]

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
