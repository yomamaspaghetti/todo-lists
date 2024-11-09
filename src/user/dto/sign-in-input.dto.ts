import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class SignInInputDto {
  @ApiProperty({
    type: 'string',
    example: 'test@test.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email: string

  @ApiProperty({
    type: 'string',
    example: 'Test123!',
    description: 'The password of the user',
    minLength: 8,
  })
  @IsString()
  password: string
}
