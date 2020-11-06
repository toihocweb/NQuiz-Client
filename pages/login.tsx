import { Col, Row } from "antd";
import Head from "next/head";
import LoginForm from "../src/components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>NQuiz | Login</title>
      </Head>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col style={{ margin: "3.625rem 0 0" }} xs={20} sm={20} md={20} lg={8}>
          <LoginForm />
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
