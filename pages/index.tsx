import type { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { fetchHello, useHello } from "../lib/hooks/useHello";

const Home: NextPage = () => {
  const helloInfo = useHello();

  return <h1>Hello {helloInfo.data?.name}</h1>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("hello", fetchHello);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
