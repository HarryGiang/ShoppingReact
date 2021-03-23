import { Col, Row, Form, Input, Button, Checkbox } from "Components/UI-Library";
import { LockOutlined, UserOutlined } from "Components/UI-Library/Icons";
import { ROUTER } from "Constants/CommonContants";
import React from "react";
import { Link } from "react-router-dom";

import "./index.less";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-wrapper">
      <Row>
        <Col span={8} offset={8} className="form-wrapper">
          <div className="login">Log In</div>
          <Form.Item
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
                <Col>
                  <Link className="login-form-forgot" to="">
                    Forgot password
                  </Link>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log In
              </Button>
              <div className="register-now">
                Do you have an account?{" "}
                <Link to={ROUTER.Register}>Register now!</Link>
              </div>
            </Form.Item>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
