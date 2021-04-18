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
  const loadData = useStoreActions(
    (actions) => actions.shop.loadData
  )
  const setPage = useStoreActions((actions) => actions.shop.setPage)
  const setProductDetail = useStoreActions(
    (actions) => actions.products.setProductDetail
  )

  useEffect(() => {
    loadData()
  }, [loadData])

  const onHandleProductDetail = (data) => {
    setProductDetail(data)
  }
  const onHandleChange = (value) => {
    setPage(value)
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
              <Pagination total={12} pageSize={8} onChange={onHandleChange} />
            </Col>
          </Row>
        </div>
      </div>
    </Spin>
  )
}

export default Shop
