import { LoginInterface } from '../../../domain/entities/login/login.entity'
import { User } from '../../../domain/entities/user/user.entity'
import { HttpService } from '../../http/http'

export class LoginService {
  private readonly httpService: HttpService
  constructor() {
    this.httpService = new HttpService()
  }

  login(userLogin: LoginInterface): Promise<User> {
    // fake api
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let response: User = {
          name: userLogin.userName,
          age: 22,
          city: 'Bogotá',
          email: userLogin.email,
        }
        resolve(response)
      }, 3000)
    })
  }
}
