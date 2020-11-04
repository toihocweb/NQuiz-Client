import { Button, Layout } from "antd";
import Link from "next/link";
import React from "react";

const AppHeader = () => {
  return (
    <Layout>
      <Layout.Header
        style={{
          position: "static",
          zIndex: 99,
          background: "#fff",
          boxShadow:
            "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
        }}
      >
        <div className="container">
          <Link href="/register">
            <Button type="primary">Register</Button>
          </Link>
        </div>
      </Layout.Header>
    </Layout>
  );
};

export default AppHeader;
