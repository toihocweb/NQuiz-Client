import { Col, Row, Typography } from "antd";
import RegisterForm from "../src/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="container">
      <Row
        style={{ height: "100vh" }}
        gutter={[16, 16]}
        justify="center"
        align="middle"
      >
        <Col>
          <Typography.Title style={{ textAlign: "center" }} level={2}>
            SIGN UP
          </Typography.Title>
          <RegisterForm />
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
