import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import Link from "next/link";
import React from "react";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 24,
  },
};

const LoginForm = () => {
  const [form] = useForm();

  const onFinish = () => {};
  return (
    <Card className="auth_card">
      <Typography.Title level={2}>NQUIZ</Typography.Title>
      <Typography.Title level={5}>
        Don't have an account yet ? <Link href="/register">Sign Up</Link>
      </Typography.Title>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        scrollToFirstError={true}
        className="auth_card__form"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Invalid E-mail",
            },
            {
              required: true,
              message: "Please type in your E-mail",
            },
          ]}
          hasFeedback
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please type in your password",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
