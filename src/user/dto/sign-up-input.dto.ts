import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsStrongPassword } from 'class-validator'

export class SignUpInputDto {
  @ApiProperty({
    type: 'string',
    example: 'test@test.com',
  })
  @IsEmail()
  email: string

  @ApiProperty({
    type: 'string',
    minLength: 8,
    example: 'Test123!',
  })
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string
}
