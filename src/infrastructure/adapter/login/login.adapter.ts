import { LoginInterface } from '../../../domain/entities/login/login.entity'
import { User } from '../../../domain/entities/user/user.entity'
import { LoginRepository } from '../../../domain/repositories/login/login.repository'
import { LoginService } from '../../services/login/login.service'

export class LoginAdapter implements LoginRepository {
  private readonly loginService: LoginService
  constructor() {
    this.loginService = new LoginService()
  }

  login(userLogin: LoginInterface): Promise<User> {
    return this.loginService.login(userLogin)
  }
}
