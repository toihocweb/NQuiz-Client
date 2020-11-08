import { Button, Card, Col, Row, Typography } from "antd";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ConfirmEmailPage = () => {
  const { query } = useRouter();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios({
          url: "http://202.182.100.160:4000/api/v1/auth/confirmemail",
          params: { token: query.token },
        });
        console.log(response.data);
        setError(false);
      } catch (error) {
        console.log(error.response);
        setError(true);
      }
    };
    fetchResult();
  }, [query.token]);
  return (
    <>
      <Head>
        <title>NQuiz | Confirmation Success</title>
      </Head>
      <Row
        style={{ height: "80vh" }}
        gutter={[16, 16]}
        justify="center"
        align="middle"
      >
        <Col style={{ textAlign: "center", marginTop: "20px" }}>
          <Card
            style={{
              maxWidth: "600px",
              borderColor: "transparent",
              boxShadow:
                "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
              borderRadius: "10px",
            }}
          >
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <img
                  style={{ maxWidth: "150px" }}
                  src="/images/logo/nquiz_logo_xs.png"
                  alt="logo"
                />
              </Col>
              <Col span={24} style={{ marginTop: "20px" }}>
                <Typography.Title level={3}>
                  {error
                    ? "Opps... There something wrong with NQuiz! Please try again later"
                    : "Congratulations! Your registration is complete"}
                </Typography.Title>
              </Col>
              {!error ? (
                <Col span={24} style={{ marginTop: "20px" }}>
                  <Button type="primary">
                    <Link href="/login">GO TO LOGIN</Link>
                  </Button>
                </Col>
              ) : null}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ConfirmEmailPage;
