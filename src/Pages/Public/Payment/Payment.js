import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'Components/Form-control/InputField'
import { Button, Col, message, Radio, Row } from 'Components/UI-Library'
import { DollarCircleOutlined } from 'Components/UI-Library/Icons'
import { useStoreActions, useStoreState } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'
import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './index.less'
import { ROUTER } from 'Constants/CommonContants'
import ProductCart from 'Components/PageHelper/ProductCart'

const Payment = () => {
  const history = useHistory()
  const user = useStoreState((state) => state.auth.user)

  useEffect(() => {
    if (isEmpty(user)) {
      history.push(ROUTER.Login)
    }
  }, [history, user])
  const [payment, setPayment] = useState(null)
  const subTotal = useStoreState((state) => state.cart.subTotal)
  const total = useStoreState((state) => state.cart.total)
  const defaultValuesStore = useStoreState((state) => state.auth.defaultValues)
  // const user = useStoreState((state) => state.auth.user)
  const checkoutCart = useStoreActions((action) => action.cart.checkoutCart)
  console.log('defaultValuesStore', defaultValuesStore)
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
  // const defaultValues = {
  //   defaultValues:  defaultValuesStore,
  //   resolver: yupResolver(schema),
  // }
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValuesStore,
  })

  const onHandleChange = (e) => {
    setPayment(e.target.value)
  }
  const handleSubmit = (reciver) => {
    // console.log(`value`, value)
    if (payment) {
      checkoutCart({ reciver, payment, total, fnCallback })
    } else message.error('Please choose method payment')
  }

  const fnCallback = (success) => {
    if (success) {
      message.success('Order is successful')
      history.push(ROUTER.OrderSuccess)
    } else {
      message.error('Failed')
    }
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
              <ProductCart total={false} removeIcon={false} />
              <Row justify="space-between">
                <Col>Subtotal</Col>
                <Col>${subTotal}</Col>
              </Row>
              <Row justify="space-between" className="shipping">
                <Col>Shipping</Col>
                <Col>$0</Col>
              </Row>
              <Row align="middle" justify="space-between" className="total">
                <Col className="sub-total">Total</Col>
                <Col className="price-total">${total}</Col>
              </Row>
              <div className="payment-methods">
                <Radio.Group onChange={onHandleChange} value={payment}>
                  <Row gutter={[12, 12]}>
                    <Col>
                      <Radio value="momo">Payment via Momo</Radio>
                    </Col>
                    <Col>
                      <Radio value="delivery">Payment on delivery</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </div>

              <Button type="primary" htmlType="submit">
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
