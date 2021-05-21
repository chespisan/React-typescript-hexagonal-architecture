import { User } from 'domain/entities/user/user.entity'
import { LoginInterface } from 'domain/entities/login/login.entity'
import { LoginRepository } from 'domain/repositories/login/login.repository'
import { HttpRepository } from 'infrastructure/repositories/http/http.repository'

export class LoginService implements LoginRepository {
  constructor(private readonly httpService: HttpRepository) {}

  async login(userLogin: LoginInterface): Promise<User> {
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
