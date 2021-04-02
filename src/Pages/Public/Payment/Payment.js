import { useForm } from 'react-hook-form'
import InputField from 'Components/Form-control/InputField'
import { Button, Col, Form, Radio, Row } from 'Components/UI-Library'
import { DollarCircleOutlined } from 'Components/UI-Library/Icons'
import { useStoreState } from 'easy-peasy'
import React, { useState } from 'react'
import './index.less'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Payment = () => {
  const [payment, setPayment] = useState(null)
  const cart = useStoreState((state) => state.cart.cart)

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.number().required(),
    address: yup.string().required(),
    message: yup.string().required(),
  })
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      message: '',
    },
    resolvers: yupResolver(schema),
  })

  const onHandleChange = (e) => {
    setPayment(e.target.value)
  }
  const handleSubmit = (value) => {
    console.log(`value`, value)
  }

  return (
    <Row className="payment-wrapper">
      <Col span={16} offset={4}>
        <Row gutter={60}>
          <Col span={16}>
            <div className="sub-title">Billing Information</div>
            <Form onSubmit={form.handleSubmit(handleSubmit)}>
              <Row gutter={[48, 24]}>
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
            </Form>
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

            <Button type="primary">
              <DollarCircleOutlined />
              Payment
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Payment
