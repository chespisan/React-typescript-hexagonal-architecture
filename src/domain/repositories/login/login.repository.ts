import { LoginInterface } from "domain/entities/login/login.entity";
import { User } from "domain/entities/user/user.entity";

export interface LoginRepository {
  login(userLogin: LoginInterface): Promise<User>
}
