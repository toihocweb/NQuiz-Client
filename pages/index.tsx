import Head from "next/head";
import AppHeader from "../src/components/AppHeader/AppHeader";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>NQuiz | Home</title>
      </Head>
      <AppHeader />
    </>
  );
};

export default HomePage;
