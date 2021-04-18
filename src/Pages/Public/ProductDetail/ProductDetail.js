import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import {
  Row,
  Col,
  Breadcrumb,
  Button,
  Collapse,
  InputNumber,
  Radio,
  message,
  Spin,
} from 'Components/UI-Library'
import get from 'lodash/get'
import {
  HeartOutlined,
  PlusOutlined,
  MinusOutlined,
  LoadingOutlined,
} from 'Components/UI-Library/Icons'

import './index.less'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { ROUTER } from 'Constants/CommonContants'

const { Panel } = Collapse

const ProductDetail = () => {
  const { id } = useParams()
  const history = useHistory()
  const productDetail = useStoreState((state) => state.products.productDetail)
  const setCart = useStoreActions((actions) => actions.cart.setCart)
  const loading = useStoreState((state) => state.products.loading)
  const getProductId = useStoreActions(
    (actions) => actions.products.getProductId
  )
  const getProductShopId = useStoreActions(
    (actions) => actions.products.getProductShopId
  )
  useEffect(() => {
    getProductId(id)
  }, [getProductId, id])
  useEffect(() => {
    getProductShopId(id)
  }, [getProductShopId, id])
  const [variant, setVariant] = useState({
    color: null,
    quantity: 1,
  })
  const onHandleColor = (e) => {
    setVariant((prev) => ({ ...prev, color: e.target.value }))
  }

  const onHandleQuantity = (value) => {
    setVariant((prev) => ({ ...prev, quantity: value }))
  }
  const onHandleAdd = (payload) => {
    if (!variant.color) {
      message.error('Please choose color of product')
    } else {
      setCart({ ...payload, ...variant })
    }
  }
  const onHandleBuyNow = (payload) => {
    if (!variant.color) {
      message.error('Please choose color of product')
    } else {
      setCart({ ...payload, ...variant })
      history.push(ROUTER.Checkout)
    }
  }
  return (
    <>
      {loading ? (
        <Spin indicator={<LoadingOutlined />} spinning={loading} />
      ) : (
        <div className="product-wrapper">
          <Row className="breadcrumb">
            <Col span={12}>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to={`${ROUTER.ProductDetail}/${productDetail.id}`}>{productDetail.name}</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row gutter={[30, 30]}>
            <Col span={14}>
              <div className="product-image">
                <Carousel infiniteLoop="true">
                  {get(productDetail, 'image', []).map((item, index) => (
                    <div key={index.toString()} >
                      <img src={item} alt="" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="short-description">
                {productDetail.description}
              </div>
            </Col>
            <Col span={10}>
              <div className="product-name">{productDetail.name}</div>
              <div className="sku">SKU: 00{productDetail.id}</div>
              <div className="product-price">${productDetail.price}</div>
              <div className="product-color mb-lg">
                <p>
                  <strong>Color:</strong> {variant.color}
                </p>
                <Radio.Group
                  onChange={onHandleColor}
                  nam="color"
                  value={variant.color}
                >
                  <Radio value={productDetail.color && productDetail.color[0]}>
                    {productDetail.color && productDetail.color[0]}
                  </Radio>
                  <Radio value={productDetail.color && productDetail.color[1]}>
                    {productDetail.color && productDetail.color[1]}
                  </Radio>
                </Radio.Group>
              </div>
              <div className="quantity mb-lg">
                <p>
                  <strong>Quantity</strong>
                </p>
                <InputNumber
                  min={1}
                  value={variant.quantity}
                  name="quantity"
                  onChange={onHandleQuantity}
                />
              </div>
              <div className="mb-sm">
                <Row gutter={[8, 8]}>
                  <Col span={20}>
                    <Button onClick={() => onHandleAdd(productDetail)}>
                      Add to cart
                    </Button>
                  </Col>
                  <Col span={4}>
                    <Button>
                      <HeartOutlined />
                    </Button>
                  </Col>
                </Row>
              </div>
              <div className="mb-sm">
                <Button
                  type="primary"
                  onClick={() => onHandleBuyNow(productDetail)}
                >
                  Buy Now
                </Button>
              </div>
              <Collapse
                ghost
                expandIconPosition="right"
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined /> : <PlusOutlined />
                }
              >
                <Panel header="Product Info" key="1">
                  <p>
                    I’m a Return and Refund policy. I’m a great place to let
                    your customers know what to do in case they are dissatisfied
                    with their purchase. Having a straightforward refund or
                    exchange policy is a great way to build trust and reassure
                    your customers that they can buy with confidence.
                  </p>
                </Panel>
                <Panel header="Return & Refund Policy" key="2">
                  <p>
                    I’m a Return and Refund policy. I’m a great place to let
                    your customers know what to do in case they are dissatisfied
                    with their purchase. Having a straightforward refund or
                    exchange policy is a great way to build trust and reassure
                    your customers that they can buy with confidence.
                  </p>
                </Panel>
                <Panel header="Shipping Info" key="3">
                  <p>
                    {`  I'm a shipping policy. I'm a great place to add more  information about your shipping methods, packaging and cost.    Providing straightforward information about your shipping   policy is a great way to build trust and reassure your  customers that they can buy from you with confidence.`}
                  </p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}
export default ProductDetail
