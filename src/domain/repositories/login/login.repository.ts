import { LoginInterface } from '../../entities/login/login.entity'
import { User } from '../../entities/user/user.entity'

export interface LoginRepository {
  login(userLogin: LoginInterface): Promise<User>
}
