import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { addDays } from 'date-fns'

export class CreateListItemInputDto {
  @ApiProperty({
    type: 'string',
    example: 'Milk',
    description: 'The title of the list item',
  })
  @IsString()
  @IsNotEmpty()
  title: string

  @ApiProperty({
    type: 'string',
    example: '2% milk',
    description: 'The description of the list item',
  })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({
    type: 'string',
    example: addDays(new Date(), 1).toISOString(),
    description: 'The due date of the list item',
  })
  @IsDateString()
  @IsOptional()
  dueAtUtc?: string
}
