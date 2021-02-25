import Head from "next/head";

import { Container } from "../styles/elements";

export default function Home() {
  return (
    <>
      <Head>
        <title> Homepage </title>
      </Head>

      <Container>
        <h1>NextJS Template</h1>
      </Container>
    </>
  );
}
