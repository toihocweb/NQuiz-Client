import { Button, Layout } from "antd";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Layout.Header
          style={{
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
