import {
  Injectable,
  ConflictException,
  ForbiddenException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Equal, Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { SignUpInputDto } from './dto/sign-up-input.dto'
import { SignInInputDto } from './dto/sign-in-input.dto'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { SignUpDto } from './dto/sign-up.dto'
import { SignInDto } from './dto/sign-in.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id: Equal(id) })
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email: Equal(email) })
  }

  async signIn(input: SignInInputDto): Promise<SignInDto> {
    const user = await this.findByEmail(input.email)

    if (!user) {
      throw new ForbiddenException('Invalid credentials')
    }

    const doesPasswordMatch = await bcrypt.compare(
      input.password,
      user.password
    )

    if (!doesPasswordMatch) {
      throw new ForbiddenException('Invalid credentials')
    }

    const payload = { sub: user.id, email: user.email }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async signUp(input: SignUpInputDto): Promise<SignUpDto> {
    const user = await this.findByEmail(input.email)

    if (user) {
      throw new ConflictException('User already exists')
    }

    const hashedPassword = await bcrypt.hash(input.password, 10)

    const newUser = this.userRepository.create({
      ...input,
      password: hashedPassword,
    })
    await this.userRepository.save(newUser)

    const { password, ...result } = newUser

    return result
  }
}
