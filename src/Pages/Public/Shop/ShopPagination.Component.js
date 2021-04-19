import React from 'react'
import { useStoreActions } from 'easy-peasy'

import { Row, Col, Pagination } from 'Components/UI-Library'
import './ShopList.Component'

const ShopPagination = () => {
  const setPage = useStoreActions((actions) => actions.shop.setPage)

  const onHandleChange = (value) => {
    setPage(value)
  }

  return (
    <Row justify="center" className="paginationShop">
      <Col>
        <Pagination total={12} pageSize={8} onChange={onHandleChange} />
      </Col>
    </Row>
  )
}

export default ShopPagination
