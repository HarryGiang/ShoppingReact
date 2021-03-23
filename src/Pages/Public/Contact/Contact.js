import Headline from "Components/PageHelper/Headline";
import { Button, Col, Form, Input, Row } from "Components/UI-Library";
import React from "react";

import "./index.less";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div>
      <Headline label="Get in Touch" />
      <div className="contact-wrapper">
        <Row>
          <Col span={8} className="contact-col">
            <div className="title">Inquiries</div>
            <div className="contact-content">
              For questions regarding our products and services you can also
              contact us by filling out this form.
            </div>
          </Col>
          <Col span={16} className="contact-col">
            <div className="title">Fill in Your Details</div>
            <Form>
              <Row gutter={[48, 24]}>
                <Col span={10}>
                  <div className="label">First Name</div>
                  <Input label="" />
                </Col>
                <Col span={10}>
                  <div className="label">Last Name</div>
                  <Input />
                </Col>
                <Col span={10}>
                  <div className="label">Email</div>
                  <Input label="" />
                </Col>
                <Col span={10}>
                  <div className="label">Subject</div>
                  <Input />
                </Col>
                <Col span={20}>
                  <div className="label">Leave us a message...</div>
                  <TextArea  />
                </Col>
                <Col span={10}>
                  <Button>Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
