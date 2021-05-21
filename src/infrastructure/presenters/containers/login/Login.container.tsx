import React, { ChangeEvent, useEffect, useState, FormEvent } from 'react'
import { LoginInterface } from 'domain/entities/login/login.entity'
import { LoginUseCase } from 'application/use-cases/login-usecase/login.useCase'
import { Button } from 'infrastructure/presenters/components/button/Button'
import { InputBasic } from 'infrastructure/presenters/components/input-basic/InputBasic'
import { LoginService } from 'infrastructure/services/login/login.service'
import { AxiosService } from 'infrastructure/http/axiosHttp'
import './Login.container.scss'

const LoginContainer = () => {
  const loginService: LoginService = new LoginService(new AxiosService())
  const [formLogin, setFormLogin] = useState<LoginInterface>({
    userName: '',
    email: '',
    password: '',
  })
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const { userName, email, password } = formLogin

  useEffect(() => {
    if (userName && email && password) setDisabledButton(false)
  }, [formLogin])

  const setInputValue = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    let name: string = target.name
    let value: string = target.value
    setFormLogin({ ...formLogin, [name]: value })
  }

  const submitForm = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (userName && email && password) {
      try {
        setDisabledButton(true)
        let loginData: LoginInterface = {
          userName,
          email,
          password,
        }
        const loginUseCase = new LoginUseCase(loginService)
        const result = await loginUseCase.login(loginData)
        setDisabledButton(false)
        console.log('results: ', result)
      } catch (error) {
        console.log('Error: ', error)
        throw new Error('Ingrese datos por favor')
      }
      return
    }
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <InputBasic
        name="userName"
        type="text"
        value={userName}
        onChangeInput={setInputValue}
        placeholder="Ingresa nombre"
      />
      <InputBasic
        name="email"
        type="text"
        placeholder="Ingresa tu email"
        onChangeInput={setInputValue}
        value={email}
      />
      <InputBasic
        name="password"
        type="password"
        placeholder="Ingresa tu password"
        onChangeInput={setInputValue}
        value={password}
      />
      <Button type="submit" disabled={disabledButton} text="Ingresar" />
    </form>
  )
}

export default LoginContainer
