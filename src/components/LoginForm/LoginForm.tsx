import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/loginActions";
import { LOGIN_RESET } from "../../store/actionsTypes/loginActionTypes";
import { LoginState, RootState } from "../../types";

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

interface LoginValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useDispatch();
  const { user, pending, error } = useSelector<RootState, LoginState>(
    (state) => state.login
  );
  const router = useRouter();
  const [form] = useForm();

  const onFinish = (values: LoginValues) => {
    if (values) {
      const user = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(user));
    }
  };

  const handleAfterClose = () => {
    dispatch({ type: LOGIN_RESET });
  };

  useEffect(() => {
    if (user) {
      router.push("/");
      dispatch({ type: LOGIN_RESET });
    }
  }, [user, error]);
  return (
    <Card className="auth_card">
      <Row>
        <Col span={24} className="auth_card__imageContainer">
          <img src="/images/logo/nquiz_logo_xs.png" />
        </Col>
      </Row>
      <Typography.Title level={5}>
        Don't have an account yet ? <Link href="/register">Sign Up</Link>
      </Typography.Title>
      {error ? (
        <Alert
          message={<Typography.Text>{error}</Typography.Text>}
          type="error"
          showIcon
          closable
          afterClose={handleAfterClose}
        />
      ) : null}
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
          <Button
            type="primary"
            htmlType="submit"
            loading={pending ? true : false}
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
