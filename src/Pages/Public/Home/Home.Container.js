import React, { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Banner } from 'Components/PageHelper/Banner'
import { IntroItem } from 'Components/PageHelper/IntroItem'
import { ProductItem } from 'Components/PageHelper/ProductItem'
import { Button, Carousel, Col, Row, Spin } from 'Components/UI-Library'
import { LoadingOutlined } from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonContants'

import Intro2 from 'Assets/Icons/ic-3-layers.svg'
import Intro1 from 'Assets/Icons/ic-fits-all.svg'
import Intro3 from 'Assets/Icons/ic-washable.svg'
import Artical from 'Assets/Images/09.jpg'

import './Home.less'

const Home = () => {
  const { t } = useTranslation(['home'])
  const tags = useStoreState((state) => state.home.tags)
  const products = useStoreState((state) => state.home.products)
  const loading = useStoreState((state) => state.home.loading)
  const getProduct = useStoreActions((actions) => actions.home.getProduct)

  useEffect(() => {
    getProduct()
  }, [getProduct])

  return (
    <Spin indicator={<LoadingOutlined />} spinning={loading}>
      <div className="main">
        <Carousel autoplay>
          <div>
            <Banner />
          </div>
          <div>
            <Banner />
          </div>
          <div>
            <Banner />
          </div>
        </Carousel>
        <div className="content">
          <div className="title">{t('Most Popular')}</div>
          <div className="most-product">
            <Row gutter={[40, 40]}>
              {products.map((item, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Col span={6} key={index}>
                    <ProductItem
                      name={item.name}
                      price={item.price}
                      image={item.image[0]}
                      id={item.id}
                    />
                  </Col>
                )
              })}
            </Row>
          </div>

          <div className="text-center">
            <Link to={ROUTER.Shop}>
              <Button className="btn">Shop All</Button>
            </Link>
          </div>
          <div className="title">{t('Our Masks')}</div>
          <Row gutter={[40, 40]}>
            <Col span={8}>
              <IntroItem
                className="bg-light-pink"
                image={Intro1}
                title="Fits All"
                content="I'm a paragraph. Click here to add your own text and edit me."
              />
            </Col>
            <Col span={8}>
              <IntroItem
                className="bg-pink"
                image={Intro2}
                title="3 Fabric Layers"
                content="I'm a paragraph. Click here to add your own text and edit me."
              />
            </Col>
            <Col span={8}>
              <IntroItem
                className="bg-light-pink"
                image={Intro3}
                title="Washable"
                content="I'm a paragraph. Click here to add your own text and edit me."
              />
            </Col>
          </Row>
          <div className="title">{t('What We Stand For')}</div>
          <Row gutter={[40, 40]}>
            <Col span={12}>
              <div className="col-left">
                <div className="col-left-content text-center">
                  {t(
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi quisquam eum et consequatur accusamus nam quia ratione minima recusandae placeat eius voluptatum animi ducimus nemo, maiores veniam ab! Voluptas eligendi, quam placeat ipsam maxime nemo vero ea voluptate quod ducimus enim cumque quisquam velit accusamus sequi quia nulla delectus!'
                  )}
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="col-right">
                <img src={Artical} alt="" />
              </div>
            </Col>
          </Row>
          <div className="title">
            {t('Tag Us on Your Daily Cruise #visage')}
          </div>
          <div className="bg-light-pink">
            <div className="tag">
              <Row gutter={[80, 80]}>
                {tags.map((item, index) => (
                  <Col span={6} key={index.toString()}>
                    <div className="tag-item">
                      <Link to="/">
                        <img src={item.image} alt="" />
                        <div className="box-overlay" />
                        <div className="tag-content">{item.tag}</div>
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default Home
