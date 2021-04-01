import InputField from "Components/Form-control/InputField";
import { Button, Checkbox, Col, Form, Row } from "Components/UI-Library";
import { ROUTER } from "Constants/CommonContants";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./index.less";

const Register = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: null,
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (value) => {
    console.log(`value`, value)
  }

  return (
    <div className="register-wrapper">
      <Row>
        <Col span={8} offset={8} className="form-wrapper">
          <div className="sign-up">Sign Up</div>
          <Form onSubmit={form.handleSubmit(handleSubmit)}>
            <Form.Item>
              <InputField
                name="firstName"
                label="First Name"
                form={form}
                isRequired
              />
            </Form.Item>
            <Form.Item>
              <InputField
                name="lastName"
                label="Last Name"
                form={form}
                isRequired
              />
            </Form.Item>
            <Form.Item>
              <InputField
                name="phoneNumber"
                label="Phone Number"
                form={form}
                isRequired
                type="number"
              />
            </Form.Item>
            <Form.Item>
              <InputField
                name="email"
                label="Email"
                type="email"
                form={form}
                isRequired
              />
            </Form.Item>
            <Form.Item>
              <InputField
                name="password"
                label="Password"
                type="password"
                form={form}
                isRequired
              />
            </Form.Item>
            <Form.Item>
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                form={form}
                isRequired
              />
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
