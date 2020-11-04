import { Col, Row } from "antd";
import Head from "next/head";
import RegisterForm from "../../src/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>NQuiz | Signup</title>
      </Head>
      <div className="container">
        <Row
          style={{ height: "90vh" }}
          gutter={[16, 16]}
          justify="center"
          align="middle"
        >
          <Col>
            <RegisterForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegisterPage;
