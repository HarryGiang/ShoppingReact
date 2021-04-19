import React, { useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useHistory } from 'react-router-dom'

import Cart from 'Components/Cart'
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Menu,
  Row,
  Select,
} from 'Components/UI-Library'
import {
  LogoutOutlined,
  ProfileOutlined,
  SearchOutlined,
  UserOutlined,
} from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonContants'

import './index.less'

const { Option } = Select

const Header = () => {
  const history = useHistory()
  const [openSearch, setOpenSearch] = useState(false)
  const { t } = useTranslation(['header'])
  const user = useStoreState((state) => state.auth.user)
  const loadingSearch = useStoreState((state) => state.shop.loadingSearch)
  const productSearch = useStoreState((state) => state.shop.productSearch)
  const getProductSearch = useStoreActions(
    (actions) => actions.shop.getProductSearch
  )
  const removeUser = useStoreActions((actions) => actions.auth.removeUser)

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch)
  }
  function onChange(value) {
    history.push(`${ROUTER.ProductDetail}/${value}`)
  }

  function onBlur() {
    console.log('blur')
  }

  function onFocus() {
    getProductSearch('')
  }

  function onSearch(val) {
    getProductSearch(val)
  }
  const handleLogout = () => {
    removeUser()
  }

  return (
    <>
      <div className="header">
        <div className="nav-menu">
          <div className="menu-item">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to="/adults">{t('adults')}</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/kids">{t('kids')}</Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <Link
                to=""
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <NavLink className="nav-item" to={ROUTER.Shop}>
                  {t('shop')}
                </NavLink>
              </Link>
            </Dropdown>
          </div>
          <div className="menu-item">
            <NavLink className="nav-item" to={ROUTER.FAQ}>
              {t('faq')}
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink className="nav-item" to={ROUTER.Contact}>
              {t('contact')}
            </NavLink>
          </div>
        </div>
        <div>
          <Link className="logo" to={ROUTER.Home}>
            {t('visage')}
          </Link>
        </div>
        <div className="user-cart">
          <div className="search">
            <Button className="btn-search" onClick={handleOpenSearch}>
              <SearchOutlined className="search-icon" />
            </Button>
            {openSearch && (
              <>
                {/* <Input.Search
                  onSearch={handleSearch}
                  className="input-search"
                  allowClear
                  placeholder="Search..."
                /> */}
                <Select
                  className="input-search"
                  loadingSearch={loadingSearch}
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  // value={value}
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {productSearch.map((item, index) => (
                    <Option value={item.id} key={index.toString()} attr={item}>
                      <Row align-item-center>
                        <Col span={6}>
                          <img
                            className="image-product-search"
                            src={item.image}
                            alt=""
                          />
                        </Col>
                        <Col>{item.name}</Col>
                      </Row>
                    </Option>
                  ))}
                </Select>
              </>
            )}
          </div>

          <Dropdown
            overlay={
              <Menu>
                {!isEmpty(user) ? (
                  <>
                    <Menu.Item>
                      <Link to={ROUTER.Profile}>
                        <ProfileOutlined /> Profile
                      </Link>
                    </Menu.Item>
                    <Menu.Item onClick={handleLogout}>
                      <LogoutOutlined /> Logout
                    </Menu.Item>
                  </>
                ) : (
                  <Menu.Item>
                    <Link to={ROUTER.Register}>Register</Link>
                  </Menu.Item>
                )}
              </Menu>
            }
          >
            <Link
              to=""
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <div className="login">
                <Avatar
                  size="small"
                  className="avatar"
                  icon={<UserOutlined />}
                />
                {!isEmpty(user) ? (
                  <Link to={ROUTER.Profile}>{user.firstName}</Link>
                ) : (
                  <Link to={ROUTER.Login}>Login</Link>
                )}
              </div>
            </Link>
          </Dropdown>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Header
