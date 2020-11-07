import { Col, Row } from "antd";
import Head from "next/head";
import RegisterConfirm from "../../src/components/RegisterConfirm/RegisterConfirm";

const RegisterConfirmPage = () => {
  return (
    <>
      <Head>
        <title>NQuiz | Signup | Confirmation</title>
      </Head>
      <div className="container">
        <Row
          style={{ height: "60vh" }}
          gutter={[16, 16]}
          justify="center"
          align="middle"
        >
          <Col style={{ textAlign: "center", marginTop: "20px" }}>
            <img
              style={{ maxWidth: "150px" }}
              src="/images/logo/nquiz_logo_xs.png"
              alt="logo"
            />
            <RegisterConfirm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegisterConfirmPage;
