import { yupResolver } from '@hookform/resolvers/yup'
import { useStoreState } from 'easy-peasy'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import InputField from 'Components/Form-control/InputField'
import Headline from 'Components/PageHelper/Headline'
import { Button, Col, Row } from 'Components/UI-Library'
import './index.less'


const Contact = () => {
  const user = useStoreState((state) => state.auth.user)

  const schema = yup.object().shape({
    firstName: yup.string().required('Please type your first name.'),
    lastName: yup.string().required('Please type your last name.'),
    email: yup.string().required('Please type your email.').email("Please enter a valid email address."),
    subject: yup.string(),
    message: yup.string(),
  })

  const defaultValues = {
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const handleSubmit = (value) => {
    console.log(`value`, value)
  }

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
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <Row gutter={[48, 6]}>
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
                  <InputField label="Subject" name="subject" form={form} />
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
                  <Button htmlType="submit">Submit</Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact
