import { Button, Card, Col, Row, Typography } from "antd";

const RegisterConfirmPage = () => {
  return (
    <div className="container">
      <Row
        style={{ height: "60vh" }}
        gutter={[16, 16]}
        justify="center"
        align="middle"
      >
        <Col style={{ textAlign: "center" }}>
          <Typography.Title
            style={{ textAlign: "center", paddingBottom: "10px" }}
            level={3}
          >
            Welcome to NQuiz!
          </Typography.Title>
          <Card
            style={{
              maxWidth: "600px",
              borderColor: "transparent",
              boxShadow:
                "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
            }}
          >
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <Typography.Text style={{ fontSize: "18px" }} strong>
                  Confirm your email address
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  We sent a confirmation email to :
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text strong>
                  user-email-here@gmail.com
                </Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text>
                  Check your email and click on the confirmation link to
                  continue
                </Typography.Text>
              </Col>
              <Col span={24} style={{ marginTop: "20px" }}>
                <Button type="primary">RE-SEND EMAIL</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterConfirmPage;
