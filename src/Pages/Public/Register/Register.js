import { Button, Checkbox, Col, Form, Input, Row } from "Components/UI-Library";
import { ROUTER } from "Constants/CommonContants";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Register = () => {
  return (
    <div className="register-wrapper">
      <Row>
        <Col span={8} offset={8} className="form-wrapper">
          <div className="sign-up">Sign Up</div>
          <Form>
            <Form.Item>
              <div className="label">Your Name*</div>
              <Input />
            </Form.Item>
            <Form.Item>
              <div className="label">Phone Number*</div>
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <div className="label">Email*</div>
              <Input type="email" />
            </Form.Item>
            <Form.Item>
              <div className="label">Password*</div>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <div className="label">Confirm Password*</div>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Checkbox>I have read the agreement</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary">Sign Up</Button>
            </Form.Item>
            <Form.Item>
              Do you have an account? <Link to={ROUTER.Login}>Login now</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
