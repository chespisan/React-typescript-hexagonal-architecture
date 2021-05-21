import LoginContainer from 'infrastructure/presenters/containers/login/Login.container'
import './Login.scss'

const Login = () => {
  return (
    <div className="container-login">
      <div className="container-form">
        <LoginContainer />
      </div>
    </div>
  )
}

export default Login
