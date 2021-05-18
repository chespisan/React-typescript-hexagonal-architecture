import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { LoginUseCase } from '../../../../application/use-cases/login-usecase/login.useCase'
import { LoginInterface } from '../../../../domain/entities/login/login.entity'
import { LoginAdapter } from '../../../adapter/login/login.adapter'
import './Login.scss'

const Login = () => {
  const loginAdapter = new LoginAdapter()
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

    if (name === 'userName') setFormLogin({ ...formLogin, userName: value })
    if (name === 'email') setFormLogin({ ...formLogin, email: value })
    if (name === 'password') setFormLogin({ ...formLogin, password: value })
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
        const loginUseCase = new LoginUseCase(loginAdapter)
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
    <div className="container-login">
      <div className="container-form">
        <form className="form" onSubmit={submitForm}>
          <input
            name="userName"
            type="text"
            placeholder="Ingresa tu usuario"
            onChange={setInputValue}
            value={userName}
          />
          <input
            name="email"
            type="text"
            placeholder="Ingresa tu email"
            onChange={setInputValue}
            value={email}
          />
          <input
            name="password"
            type="password"
            placeholder="Ingresa tu password"
            onChange={setInputValue}
            value={password}
          />
          <button type="submit" disabled={disabledButton}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
