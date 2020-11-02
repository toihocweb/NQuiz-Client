import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
