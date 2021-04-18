import ProductCart from 'Components/PageHelper/ProductCart'
import { Button, Col, Row } from 'Components/UI-Library'
import { UnlockOutlined } from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonContants'
import { useStoreState } from 'easy-peasy'
import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.less'

const Checkout = () => {
  const history = useHistory()
  const subTotal = useStoreState((state) => state.cart.subTotal)
  const total = useStoreState((state) => state.cart.total)

  const handleCheckout = () => {
    history.push(ROUTER.Payment)
  }

  return (
    <Row className="checkout-wrapper">
      <Col span={16} offset={4}>
        <Row gutter={60}>
          <Col span={16}>
            <div className="sub-title">My Cart</div>
            <ProductCart />
          </Col>
          <Col span={8}>
            <div className="sub-title">Order Summary</div>
            <Row justify="space-between">
              <Col>Subtotal</Col>
              <Col>${subTotal}</Col>
            </Row>
            <Row justify="space-between" className="shipping">
              <Col>Voucher</Col>
              <Col>$0.00</Col>
            </Row>
            <Row align="middle" justify="space-between" className="total">
              <Col className="sub-total">Total</Col>
              <Col className="price-total">${total}</Col>
            </Row>
            <Button type="primary" onClick={handleCheckout}>
              <UnlockOutlined />
              Checkout
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Checkout
