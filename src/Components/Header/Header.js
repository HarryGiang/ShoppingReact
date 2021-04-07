import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Input } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonContants'
import Cart from 'Components/Cart'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import './index.less'
import { useStoreState } from 'easy-peasy'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const { t } = useTranslation(['header'])
  const user = useStoreState((state) => state.auth.user)

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch)
  }

  return (
    <>
      <div className="header">
        <div className="nav-menu">
          <div className="menu-item">
            <NavLink className="nav-item" to={ROUTER.Shop}>
              {t('shop')}
            </NavLink>
            <div className="dropdown-menu">
              <div>
                <Link className="nav-item" to="/adults">
                  {t('adults')}
                </Link>
              </div>
              <div>
                <Link className="nav-item" to="/kids">
                  {t('kids')}
                </Link>
              </div>
            </div>
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
              <Input.Search
                className="input-search"
                allowClear
                placeholder="Search..."
              />
            )}
          </div>
          <Link to={ROUTER.Login} className="login">
            <Avatar size="small" className="avatar" icon={<UserOutlined />} />
            {user ? user.firstName : 'Login'}
          </Link>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Header
