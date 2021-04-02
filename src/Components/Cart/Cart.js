import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'

import ProductCart from 'Components/PageHelper/ProductCart'
import { Badge, Button, Col, Drawer, Row } from 'Components/UI-Library'
import {
  CloseOutlined,
  ShoppingCartOutlined,
} from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonContants'
import './index.less'

const Cart = () => {
  const count = useStoreState((state) => state.cart.count)
  const cart = useStoreState((state) => state.cart.cart)
  const [visible, setVisible] = useState(false)

  const showCart = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className="cart-wrapper">
      <Button onClick={showCart} className="shopping-cart">
        <ShoppingCartOutlined className="cart-icon" />
        <Badge className="quantity" size="small" count={count} />
      </Button>
      <Drawer
        closeIcon={<CloseOutlined />}
        width={350}
        title="My Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
        footer={
          <Row align="middle" gutter={[12, 12]} className="footer-cart">
            <Col span={12} className="sub-total">
              Total:
            </Col>
            <Col span={12} className="price-total">
              $
              {cart.length
                ? cart
                    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                    .toFixed(2)
                : 0}
            </Col>
            <Col span={24}>
              <Link to={ROUTER.Checkout}>
                <Button onClick={onClose}>View Cart</Button>
              </Link>
            </Col>
          </Row>
        }
      >
        <ProductCart />
      </Drawer>
    </div>
  )
}

export default Cart
