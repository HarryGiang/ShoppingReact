import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'Components/Form-control/InputField'
import { Button, Col, Radio, Row } from 'Components/UI-Library'
import { DollarCircleOutlined } from 'Components/UI-Library/Icons'
import { useStoreState } from 'easy-peasy'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './index.less'

const Payment = () => {
  const [payment, setPayment] = useState(null)
  const cart = useStoreState((state) => state.cart.cart)
  const user = useStoreState((state) => state.auth.user)

  const schema = yup.object().shape({
    firstName: yup.string().required('Please type your first name.'),
    lastName: yup.string().required('Please type your last name.'),
    email: yup
      .string()
      .required('Please type your email.')
      .email('Please enter a valid email address.'),
    phoneNumber: yup
      .number()
      .required('Please type your phone number.')
      .typeError('Your phone number is not valid')
      .min(10, 'Your number phone is not valid'),
    address: yup.string().required('Please type your address.'),
    message: yup.string(),
  })
  const defaultValues = {
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      phoneNumber: user ? user.phoneNumber :'',
      address: user ? user.address : '',
      message: '',
    },
    resolver: yupResolver(schema),
  }
  const form = useForm(defaultValues)

  const onHandleChange = (e) => {
    setPayment(e.target.value)
  }
  const handleSubmit = (value) => {
    console.log(`value`, value)
  }
  const handlePayment = (value) => {
    console.log(`value`, value)
  }

  return (
    <Row className="payment-wrapper">
      <Col span={16} offset={4}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Row gutter={60}>
            <Col span={16}>
              <div className="sub-title">Billing Information</div>
              <Row gutter={[48, 6]}>
                <Col span={12}>
                  <InputField
                    label="First Name"
                    name="firstName"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={12}>
                  <InputField
                    label="Last Name"
                    name="lastName"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={12}>
                  <InputField
                    label="Email"
                    name="email"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={12}>
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    type="number"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={24}>
                  <InputField
                    label="Address"
                    name="address"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={24}>
                  <InputField
                    label="Order Notes"
                    name="message"
                    form={form}
                    textArea
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <div className="sub-title">Your Order</div>
              <Row justify="space-between">
                <Col>Subtotal</Col>
                <Col>
                  $
                  {cart
                    ? cart
                        .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                        .toFixed(2)
                    : 0}
                </Col>
              </Row>
              <Row justify="space-between" className="shipping">
                <Col>Shipping</Col>
                <Col>
                  $
                  {cart &&
                    cart.map((item) =>
                      item.shipping ? item.shipping.toFixed(2) : 0
                    )}
                </Col>
              </Row>
              <Row align="middle" justify="space-between" className="total">
                <Col className="sub-total">Total</Col>
                <Col className="price-total">
                  $
                  {cart
                    ? cart
                        .reduce(
                          (acc, cur) =>
                            acc + cur.price * cur.quantity + cur.shipping,
                          0
                        )
                        .toFixed(2)
                    : 0}
                </Col>
              </Row>
              <div className="payment-methods">
                <Radio.Group onChange={onHandleChange} value={payment}>
                  <Row gutter={[12, 12]}>
                    <Col>
                      <Radio value={1}>Payment via Momo</Radio>
                    </Col>
                    <Col>
                      <Radio value={2}>Payment on delivery</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </div>

              <Button type="primary" htmlType="submit" onClick={handlePayment}>
                <DollarCircleOutlined />
                Payment
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  )
}

export default Payment
