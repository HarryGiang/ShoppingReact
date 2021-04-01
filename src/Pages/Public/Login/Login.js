import InputField from "Components/Form-control/InputField";
import { Button, Checkbox, Col, Form, Row } from "Components/UI-Library";
import { ROUTER } from "Constants/CommonContants";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./index.less";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Please type your email.'),
    password: yup.string().required('Please type your password.'),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolvers: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    console.log("value :>> ", value);
  };

  return (
    <div className="login-wrapper">
      <Row>
        <Col span={8} className="form-wrapper">
          <div className="login">Log In</div>
          <Form onSubmit={form.handleSubmit(handleSubmit)}>
            <Form.Item>
              <InputField name="email" label="Email" form={form} isRequired />
            </Form.Item>
            <Form.Item>
              <InputField
                name="password"
                label="Password"
                form={form}
                isRequired
              />
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
