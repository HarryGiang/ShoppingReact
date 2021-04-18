import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import './index.less'
import {
  HeartOutlined,
  UserOutlined,
  HistoryOutlined,
  EditOutlined,
  PullRequestOutlined,
  WalletOutlined,
  InboxOutlined,
  CarOutlined,
  StarOutlined,
} from 'Components/UI-Library/Icons'
import {
  Button,
  Col,
  Row,
  Upload,
  Tabs,
  message,
  Steps,
  Badge,
} from 'Components/UI-Library'
import Headline from 'Components/PageHelper/Headline'
import InputField from 'Components/Form-control'
import ProductCart from 'Components/PageHelper/ProductCart'
import { Link } from 'react-router-dom'

const { TabPane } = Tabs
const { Step } = Steps

const Profile = () => {
  const user = useStoreState((state) => state.auth.user)
  const editUser = useStoreActions((actions) => actions.auth.editUser)
  const statusOrder = useStoreState((state) => state.products.statusOrder)

  const schema = yup.object().shape({
    firstName: yup.string().required('Please type your first name.'),
    lastName: yup.string().required('Please type your last name.'),
    email: yup
      .string()
      .required('Please type your email.')
      .email('Please enter a valid email address.'),
    phoneNumber: yup
      .number()
      .typeError('Your phone number is not valid')
      .min(10, 'Your number phone is not valid')
      .required('Please type your phone number.'),
    address: yup.string(),
  })

  const defaultValues = {
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      phoneNumber: user ? user.phoneNumber : '',
      address: '',
    },
    resolver: yupResolver(schema),
  }
  const form = useForm(defaultValues)

  const handleSubmit = (value) => {
    editUser({ value, fnCallback })
  }
  const fnCallback = (success) => {
    if (success) {
      message.success('Update successful !!!')
    } else {
      message.error('Update failed')
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="profile-wrapper"
    >
      <Headline label="PROFILE" />
      <Row gutter={[0, 60]} justify="center">
        <Col md={6}>
          <div className="profile-img">
            <img
              src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
              alt=""
            />
            <Upload className="upload-image">
              <Button className="file">Change Photo</Button>
            </Upload>
          </div>
        </Col>
        <Col md={14} offset={2}>
          <h1>
            {user.firstName} {user.lastName} <EditOutlined />
          </h1>
          <div className="profile-work">
            <Tabs tabPosition="left">
              <TabPane
                tab={
                  <>
                    <UserOutlined /> My Profile
                  </>
                }
                key="profile"
              >
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
                      isRequired
                      form={form}
                    />
                  </Col>
                  <Col span={24}>
                    <InputField
                      label="Address"
                      name="address"
                      form={form}
                      textArea
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <>
                    <PullRequestOutlined />
                    Order Status
                  </>
                }
                key="status"
              >
                <Steps direction="vertical">
                  <Step
                    status="finish"
                    title="Confirmation"
                    description="Wait for confirmation."
                    icon={
                      <>
                        <WalletOutlined />
                        <Badge count={5} size="small" className="badge-order">
                          <Link to="" />
                        </Badge>
                      </>
                    }
                  />
                  <Step
                    status={statusOrder}
                    title="Pickup"
                    description="Wait for pickup."
                    icon={
                      <>
                        <InboxOutlined />
                        <Badge count={1} size="small" className="badge-order">
                          <Link to="" />
                        </Badge>
                      </>
                    }
                  />
                  <Step
                    status="wait"
                    title="Shipping"
                    description="Products are shipping."
                    icon={
                      <>
                        <CarOutlined />
                        <Badge count={0} size="small" className="badge-order">
                          <Link to="" />
                        </Badge>
                      </>
                    }
                  />
                  <Step
                    status="wait"
                    title="Reviews"
                    description="Product reviews."
                    icon={
                      <>
                        <StarOutlined />
                        <Badge count={0} size="small" className="badge-order">
                          <Link to="" />
                        </Badge>
                      </>
                    }
                  />
                </Steps>
              </TabPane>
              <TabPane
                tab={
                  <>
                    <HeartOutlined /> Wishlist
                  </>
                }
                key="wishlist"
              >
                abc1
              </TabPane>
              <TabPane
                tab={
                  <>
                    <HistoryOutlined /> Purchase History
                  </>
                }
                key="history"
              >
                <ProductCart />
              </TabPane>
            </Tabs>
          </div>
        </Col>
        <Col md={4}>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Col>
      </Row>
    </form>
  )
}
export default Profile
