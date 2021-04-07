import React, { useEffect } from 'react'
import { Row, Col, Spin, Pagination } from 'Components/UI-Library'
import Headline from 'Components/PageHelper/Headline'
import { ProductItem } from 'Components/PageHelper/ProductItem'
import './index.less'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { LoadingOutlined } from 'Components/UI-Library/Icons'

const Shop = () => {
  const productShop = useStoreState((state) => state.shop.productShop)
  const loading = useStoreState((state) => state.shop.loading)
  const getProductShop = useStoreActions(
    (actions) => actions.shop.getProductShop
  )
  const setProductDetail = useStoreActions(
    (actions) => actions.products.setProductDetail
  )

  useEffect(() => {
    getProductShop()
  }, [getProductShop])

  const onHandleProductDetail = (data) => {
    setProductDetail(data)
  }

  return (
    <Spin indicator={<LoadingOutlined />} spinning={loading}>
      <div className="shop-wrapper">
        <Headline label="Shop All" />
        <div className="product-list">
          <Row gutter={[40, 40]}>
            {productShop.map((item) => {
              return (
                <Col
                  span={6}
                  key={item.id}
                  onClick={() => onHandleProductDetail(item)}
                >
                  <ProductItem
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                  />
                </Col>
              )
            })}
          </Row>
          <Row justify="center" className="pagination">
            <Col>
              <Pagination defaultCurren={1} total={50} />
            </Col>
          </Row>
        </div>
      </div>
    </Spin>
  )
}

export default Shop
