import { Button, Drawer, Menu } from 'Components/UI-Library'
import { CloseOutlined, MenuOutlined } from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MenuMobile.Style.less'
import SearchBar from './SearchBar.Component'

const { SubMenu } = Menu

const MenuMobile = () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const handleClick = (e) => {
    console.log(`click`, e)
  }
  return (
    <div className="menu-mobile-wrapper">
      <Button onClick={showDrawer} className="btn-menu">
        <MenuOutlined />
      </Button>
      <Drawer
        closeIcon={<CloseOutlined />}
        title={<SearchBar />}
        width={280}
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <SubMenu key="sub1" title="Shop">
            <Menu.Item key="shop">
              <Link to={ROUTER.Shop} onClick={onClose}>
                Shop All
              </Link>
            </Menu.Item>
            <Menu.Item key="adults">
              <Link to="/adults" onClick={onClose}>
                Adults
              </Link>
            </Menu.Item>
            <Menu.Item key="kids">
              <Link to="/kids" onClick={onClose}>
                Kids
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="faq">
            <Link to={ROUTER.FAQ} onClick={onClose}>
              FAQ
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to={ROUTER.Contact} onClick={onClose}>
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  )
}

export default MenuMobile
