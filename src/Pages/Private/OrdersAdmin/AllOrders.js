import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import { format } from 'date-fns'

import { Popconfirm, Space, Table, Tag } from 'Components/UI-Library'
import {
  DeleteOutlined,
  EditOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from 'Components/UI-Library/Icons'
import ModalOrder from './ModalOrder.Component'

const AllOrders = () => {
  // State
  const orders = useStoreState((state) => state.orderAdmin.orders)
  console.log('orders :>> ', orders)
  const loading = useStoreState((state) => state.orderAdmin.loading)
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({})

  // Function
  const showModal = (data) => {
    setData(data)
    setVisible(true)
  }

  // data table
  const columns = [
    {
      title: 'Code Orders',
      dataIndex: 'id',
      key: 'order',
    },
    {
      title: 'Date',
      dataIndex: 'create_at',
      key: 'date',
      render: (create_at) => format(create_at, 'dd-MM-yyyy'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag
          icon={
            status === 'Processing' ? (
              <SyncOutlined spin />
            ) : (
              <CheckCircleOutlined />
            )
          }
          color={`${status === 'Processing' ? 'processing' : 'success'}`}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => showModal(record)} />
          <Popconfirm
            title="Are you sure to delete this product?"
            // onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ]
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      )
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows)
    },
  }
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>ALL ORDERS</h1>
      <Table
        dataSource={orders}
        rowSelection={rowSelection}
        columns={columns}
        loading={loading}
        // pagination={page}
      />
      {visible && (
        <ModalOrder visible={visible} data={data} setVisible={setVisible} />
      )}
    </>
  )
}

export default AllOrders
