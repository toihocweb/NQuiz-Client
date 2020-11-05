import { Col, Row } from "antd";
import Head from "next/head";
import RegisterForm from "../../src/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>NQuiz | Signup</title>
      </Head>
      <Row
        style={{ height: "90vh" }}
        gutter={[16, 16]}
        justify="center"
        align="middle"
      >
        <Col style={{ margin: "2.625rem 0" }} xs={20} sm={20} md={20} lg={8}>
          <RegisterForm />
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;
