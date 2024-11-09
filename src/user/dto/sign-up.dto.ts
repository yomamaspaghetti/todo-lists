import { ApiProperty } from '@nestjs/swagger'

export class SignUpDto {
  @ApiProperty({
    type: 'integer',
    example: 1,
    description: 'The ID of the user',
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
    example: '2024-02-20T12:00:00.000Z',
    description: 'When the user was created',
  })
  createdAtUtc: string

  @ApiProperty({
    type: 'string',
    example: '2024-02-20T12:00:00.000Z',
    description: 'When the user was last updated',
  })
  updatedAtUtc: string
}
