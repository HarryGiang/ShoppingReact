import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'Components/Form-control/InputField'
import {
  Button,
  Checkbox,
  Col,

  message,
  Row
} from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonContants'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import './index.less'


const Login = () => {
  const getLogin = useStoreActions((action) => action.auth.getLogin)
  const user = useStoreState((state) => state.auth.user)

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password.'),
  })

  const defaultValues = {
    defaultValues: {
      email: user ? user.email : '',
      password: '',
    },
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)
  const history = useHistory()

  const handleSubmit = (value) => {
    getLogin({ value, fnCallback })
  }

  const fnCallback = (success) => {
    if (success) {
      message.success('Logged in successfully')
      history.push(ROUTER.Home)
    } else {
      message.error('Login failed')
    }
  }

  return (
    <div className="login-wrapper">
      <Row>
        <Col span={8} className="form-wrapper">
          <div className="login">Log In</div>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="email" label="Email" form={form} isRequired />
            <InputField
              name="password"
              label="Password"
              type="password"
              form={form}
              isRequired
            />
            <Row justify="space-between">
              <Col>
                <Checkbox>Remember me</Checkbox>
              </Col>
              <Col>
                <Link to="">Forgot password</Link>
              </Col>
            </Row>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-login"
              //  onClick={handleSubmit}
            >
              Log In
            </Button>
            Do you have an account?{' '}
            <Link to={ROUTER.Register}>Register now</Link>
          </form>
        </Col>
        <Col span={16} className="login-banner">
          <img
            src="https://img.freepik.com/free-photo/young-asia-girl-wearing-medical-face-mask-shows-something-blank-space-with-dressed-casual-cloth-looking-camera-isolated-blue-background-social-distancing-quarantine-corona-virus_7861-2707.jpg?size=626&ext=jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  )
}

export default Login
