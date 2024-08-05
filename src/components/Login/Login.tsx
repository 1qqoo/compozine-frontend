import { FC } from 'react'
import { LoginProps } from '.'
import LoginStyles from './Login.module.css'

const Login: FC<LoginProps> = (props) => {
  return <h1 className={LoginStyles.login__title}>Login</h1>
}

export default Login
