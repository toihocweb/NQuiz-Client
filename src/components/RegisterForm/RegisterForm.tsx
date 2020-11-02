import { Alert, Button, Card, Form, Input, Select, Typography } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface RegisterFormValues {
  name: string;
  email: string;
  career: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [error, setError] = useState<string | null>(null);

  const onFinish = async (values: RegisterFormValues) => {
    if (values) {
      const newUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        career: values.career,
      };
      try {
        const response = await axios({
          url: "http://202.182.100.160:4000/api/v1/auth/register",
          method: "POST",
          data: newUser,
        });
        console.log(response.data);
        router.push({
          pathname: "/register/confirmation",
          query: { email: response.data.data.email },
        });
        setError(null);
      } catch (error) {
        const errorEmail = error.response.data.error.email;
        setError(errorEmail);
      }
      console.log("Received values of form: ", values);
    }
  };
  return (
    <>
      {error ? (
        <Alert
          style={{ marginBottom: "20px" }}
          message={
            <Typography.Text>
              The email: <Typography.Text strong>{error}</Typography.Text> is
              already used! Please use another email
            </Typography.Text>
          }
          type="error"
          showIcon
        />
      ) : null}
      <Card
        style={{
          minWidth: "600px",
          borderColor: "transparent",
          boxShadow:
            "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
        }}
      >
        <Typography.Title
          style={{ textAlign: "center", paddingBottom: "10px" }}
          level={2}
        >
          SIGN UP
        </Typography.Title>
        <Form
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please type in your Name",
              },
              { min: 3, message: "Name required at least 3 characters" },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
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
            <Input />
          </Form.Item>
          <Form.Item
            name="career"
            label="Career"
            rules={[
              {
                required: true,
                message: "Please choose your career",
              },
            ]}
          >
            <Select>
              <Select.Option value="developer">Developer</Select.Option>
              <Select.Option value="student">Student</Select.Option>
              <Select.Option value="teacher">Teacher</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please type in your password",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please type in your password again" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two password that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default RegisterForm;
