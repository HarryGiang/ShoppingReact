import Headline from "Components/PageHelper/Headline";
import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import "./index.less";
import { Col, Row } from "Components/UI-Library";

const FAQ = () => {
  const [open, setOpen] = useState(false);

  const onHanleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Headline label="FAQ" />
      <div className="faq-wrapper">
        <Row>
          <Col span={16} offset={4}>
            <div className="sub-title">Common Questions</div>
          </Col>
          <Col span={16} offset={4}>
            <div className="product-info">
              <div className="info-item">
                <div className="info-title" onClick={onHanleOpen}>
                  <div>How do I add a new question?</div>
                  {open ? <MinusOutlined /> : <PlusOutlined />}
                </div>
                {open && (
                  <div className="info-description">
                    I’m a Return and Refund policy. I’m a great place to let
                    your customers know what to do in case they are dissatisfied
                    with their purchase. Having a straightforward refund or
                    exchange policy is a great way to build trust and reassure
                    your customers that they can buy with confidence.
                  </div>
                )}
              </div>
              <div className="info-item">
                <div className="info-title" onClick={onHanleOpen}>
                  <div>Can I insert pictures in my FAQ?</div>
                  {open ? <MinusOutlined /> : <PlusOutlined />}
                </div>
                {open && (
                  <div className="info-description">
                    I’m a Return and Refund policy. I’m a great place to let
                    your customers know what to do in case they are dissatisfied
                    with their purchase. Having a straightforward refund or
                    exchange policy is a great way to build trust and reassure
                    your customers that they can buy with confidence.
                  </div>
                )}
              </div>
              <div className="info-item">
                <div className="info-title" onClick={onHanleOpen}>
                  <div>Can I insert a video in my FAQ?</div>
                  {open ? <MinusOutlined /> : <PlusOutlined />}
                </div>
                {open && (
                  <div className="info-description">
                    I'm a shipping policy. I'm a great place to add more
                    information about your shipping methods, packaging and cost.
                    Providing straightforward information about your shipping
                    policy is a great way to build trust and reassure your
                    customers that they can buy from you with confidence.
                  </div>
                )}
              </div>
              <div className="info-item">
                <div className="info-title" onClick={onHanleOpen}>
                  <div>How do I edit or remove the "FAQ title"?</div>
                  {open ? <MinusOutlined /> : <PlusOutlined />}
                </div>
                {open && (
                  <div className="info-description">
                    I'm a shipping policy. I'm a great place to add more
                    information about your shipping methods, packaging and cost.
                    Providing straightforward information about your shipping
                    policy is a great way to build trust and reassure your
                    customers that they can buy from you with confidence.
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FAQ;
