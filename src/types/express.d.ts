import { User as _User } from 'user/entities/user.entity'

declare global {
  namespace Express {
    interface Request {
      user: _User
    }
  }
}
