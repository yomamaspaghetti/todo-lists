import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class SignInDto {
  @ApiProperty({
    type: 'string',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTczMTE1NzAyNSwiZXhwIjoxNzMxMjQzNDI1fQ.6rFv1Hhp9OKWcYp_LWtCGmzsU3Ogp9kPY9jZZkLu-TU',
    description: 'The access token of the user',
  })
  @IsString()
  access_token: string
}
