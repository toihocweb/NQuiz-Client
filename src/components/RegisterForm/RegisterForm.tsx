import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/registerActions";
import { REGISTER_RESET } from "../../store/actionsTypes/registerActionTypes";
import { IUser, RegisterState, RootState } from "../../types";

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

interface RegisterFormValues {
  name: string;
  email: string;
  career: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form] = Form.useForm();

  const { user, pending, error, isConfirming } = useSelector<
    RootState,
    RegisterState
  >((state) => state.register);

  const onFinish = (values: RegisterFormValues) => {
    if (values) {
      const newUser: IUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        career: values.career,
      };
      dispatch(register(newUser));
    }
  };

  const handleAlertClose = () => {
    dispatch({ type: REGISTER_RESET });
  };

  useEffect(() => {
    if (user && isConfirming) {
      router.push({
        pathname: "/register/confirmation",
        query: { email: user.email },
      });
      dispatch({ type: REGISTER_RESET });
    } else if (error) window.scrollTo(0, 0);
  }, [user, isConfirming, error]);

  return (
    <Card className="auth_card">
      <Row>
        <Col span={24} className="auth_card__imageContainer">
          <img src="/images/logo/nquiz_logo_xs.png" />
        </Col>
      </Row>
      <Typography.Title level={5}>Create a new account</Typography.Title>
      <Typography.Text strong className="auth_card__text">
        <Link href="/login">I have an account</Link>
      </Typography.Text>
      {error ? (
        <Alert
          message={
            <Typography.Text>
              The email: <Typography.Text strong>{error}</Typography.Text> is
              already used! Please use another email
            </Typography.Text>
          }
          type="error"
          showIcon
          closable
          afterClose={handleAlertClose}
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} />
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
          <Input prefix={<MailOutlined className="site-form-item-icon" />} />
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
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
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegisterForm;
