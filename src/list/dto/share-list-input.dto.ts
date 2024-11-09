import { ApiProperty } from '@nestjs/swagger'
import { IsInt } from 'class-validator'

export class ShareListInputDto {
  @ApiProperty({
    type: 'integer',
    example: 1,
    description: 'The user ID to share the list with',
  })
  @IsInt()
  userId: number
}
