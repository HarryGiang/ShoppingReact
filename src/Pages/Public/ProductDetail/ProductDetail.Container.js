import { Col, Row, Spin } from 'Components/UI-Library'
import { LoadingOutlined } from 'Components/UI-Library/Icons'
import { useStoreState } from 'easy-peasy'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.less'
import ProductBreadcrumb from './ProductBreadcrumb.Component'
import ProductCarousel from './ProductCarousel.Component'
import ProductContent from './ProductContent.Component'
import useProductDetail from './ProductDetail.Hook'

const ProductDetail = () => {
  useProductDetail()
  const productDetail = useStoreState((state) => state.products.productDetail)
  const loading = useStoreState((state) => state.products.loading)

  return (
    <>
      {loading ? (
        <Spin indicator={<LoadingOutlined />} spinning={loading} />
      ) : (
        <div className="product-wrapper">
          <Row className="breadcrumb">
            <Col span={12}>
              <ProductBreadcrumb />
            </Col>
          </Row>
          <Row gutter={[30, 30]}>
            <Col span={14}>
              <ProductCarousel />
              <div className="short-description">
                {productDetail.description}
              </div>
            </Col>
            <Col span={10}>
              <ProductContent />
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}
export default ProductDetail
