import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
          <title>About page</title>
          <meta name="description" content="About page content description" />
      </Head>
      <h2>About page</h2>
      <Link href="/">Home Page</Link>
      {' '}
      <Link href="/counter">Counter Page</Link>
    </>
  );
}

export default About;
