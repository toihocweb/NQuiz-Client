import { Col, Row } from "antd";
import RegisterForm from "../../src/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
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
  );
};

export default RegisterPage;
