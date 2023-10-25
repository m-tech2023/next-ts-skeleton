import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";


const Home = () => {
  return (
    <>
      <Head>
          <title>Home page</title>
          <meta name="description" content="Home page content description" />
      </Head>
      <h2>Home page</h2>
      <Link href="/about">
        <FontAwesomeIcon icon={faCheck} className="fas fa-check"></FontAwesomeIcon> About Page
      </Link>
    </>
  );
}

export default Home;
