import { Row } from 'Components/UI-Library'
import React from 'react'
import './index.less'
import useLogin from './Login.Hook'
import LoginBanner from './LoginBanner.Component'
import LoginForm from './LoginForm.Component'

const Login = () => {
  useLogin()
  return (
    <div className="login-wrapper">
      <Row>
        <LoginForm />
        <LoginBanner />
      </Row>
    </div>
  )
}

export default Login
