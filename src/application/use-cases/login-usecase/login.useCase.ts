import { LoginInterface } from '../../../domain/entities/login/login.entity'
import { User } from '../../../domain/entities/user/user.entity'
import { LoginRepository } from '../../../domain/repositories/login/login.repository'

export class LoginUseCase {
  constructor(private readonly loginRepository: LoginRepository) {}

  login(user: LoginInterface): Promise<User> {
    return this.loginRepository.login(user)
  }
}
