import { Col, Row } from "antd";
import Head from "next/head";
import RegisterForm from "../../src/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>NQuiz | Signup</title>
      </Head>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col style={{ margin: "3.625rem 0" }} xs={20} sm={20} md={20} lg={8}>
          <RegisterForm />
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;
