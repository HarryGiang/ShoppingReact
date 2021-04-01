import { useForm } from "react-hook-form";
import InputField from "Components/Form-control/InputField";
import Headline from "Components/PageHelper/Headline";
import { Button, Col, Form, Row } from "Components/UI-Library";
import React from "react";

import "./index.less";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = (value) => {
    console.log(`value`, value);
  };

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
            <Form onSubmit={form.handleSubmit(handleSubmit)}>
              <Row gutter={[48, 24]}>
                <Col span={10}>
                  <InputField
                    label="First Name"
                    name="firstName"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={10}>
                  <InputField
                    label="Last Name"
                    name="lastName"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={10}>
                  <InputField
                    label="Email"
                    name="email"
                    form={form}
                    isRequired
                  />
                </Col>
                <Col span={10}>
                  <InputField
                    label="Subject"
                    name="subject"
                    form={form}
                  />
                </Col>
                <Col span={20}>
                  <InputField
                    label="Leave us a message..."
                    name="message"
                    form={form}
                    textArea
                  />
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
