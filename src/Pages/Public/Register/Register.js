import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'Components/Form-control/InputField'
import { Button, Checkbox, Col, message, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonContants'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import './index.less'

const Register = () => {
  const history = useHistory()
  const saveRegister = useStoreActions((action) => action.auth.saveRegister)
  const user = useStoreState((state) => state.auth.user)

  useEffect(() => {
    if (!isEmpty(user)) {
      history.push(ROUTER.Home)
    }
  }, [history, user])
  const schema = yup.object().shape({
    firstName: yup.string().required('Please type your first name.'),
    lastName: yup.string().required('Please type your last name.'),
    phoneNumber: yup
      .number()
      .typeError('Your phone number is not valid')
      .min(10, 'Your number phone is not valid')
      .required('Please type your phone number.'),
    email: yup
      .string()
      .required('Please type your email.')
      .email('Please enter a valid email address.'),
    password: yup
      .string()
      .required('Please type your password.')
      .min(6, 'Please enter at least 6 charactors.'),
    confirmPassword: yup
      .string()
      .required('Please type confirm password.')
      .oneOf([yup.ref('password')], 'Password does not match.'),
  })

  const defaultValues = {
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: null,
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const handleSubmit = (value) => {
    saveRegister({ value, fnCallback })
  }
  const fnCallback = (success) => {
    if (success) {
      message.success('Account registration is successful')
      history.push(ROUTER.Login)
    } else {
      message.error('Account registration failed')
    }
  }
  return (
    <div className="register-wrapper">
      <Row>
        <Col span={8} offset={8} className="form-wrapper">
          <div className="sign-up">Sign Up</div>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField
              name="firstName"
              label="First Name"
              form={form}
              isRequired
            />
            <InputField
              name="lastName"
              label="Last Name"
              form={form}
              isRequired
            />
            <InputField
              name="phoneNumber"
              label="Phone Number"
              form={form}
              isRequired
              type="number"
            />
            <InputField
              name="email"
              label="Email"
              type="email"
              form={form}
              isRequired
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              form={form}
              isRequired
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              form={form}
              isRequired
            />
            <Checkbox>I have read the agreement</Checkbox>
            <Button type="primary" htmlType="submit" className="btn-sign-up">
              Sign Up
            </Button>
            Do you have an account? <Link to={ROUTER.Login}>Login now</Link>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default Register
