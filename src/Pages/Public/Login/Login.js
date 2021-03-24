import { Button, Checkbox, Col, Form, Input, Row } from "Components/UI-Library";
import { ROUTER } from "Constants/CommonContants";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Login = () => {
  return (
    <div className="login-wrapper">
      <Row>
        <Col span={8} className="form-wrapper">
          <div className="login">Log In</div>
          <Form>
            <Form.Item>
              <div className="label">Email*</div>
              <Input type="email" />
            </Form.Item>
            <Form.Item>
              <div className="label">Password*</div>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Checkbox>Remember me</Checkbox>
                </Col>
                <Col>
                  <Link to="">Forgot password</Link>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button type="primary">Log In</Button>
            </Form.Item>
            <Form.Item>
              Do you have an account?{" "}
              <Link to={ROUTER.Register}>Register now</Link>
            </Form.Item>
          </Form>
        </Col>
        <Col span={16} className="login-banner">
          <img
            src="https://img.freepik.com/free-photo/young-asia-girl-wearing-medical-face-mask-shows-something-blank-space-with-dressed-casual-cloth-looking-camera-isolated-blue-background-social-distancing-quarantine-corona-virus_7861-2707.jpg?size=626&ext=jpg"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
