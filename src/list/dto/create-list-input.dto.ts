import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateListInputDto {
  @ApiProperty({
    type: 'string',
    example: 'Shopping list',
    description: 'The name of the list',
  })
  @IsString()
  @IsNotEmpty()
  name: string
}
