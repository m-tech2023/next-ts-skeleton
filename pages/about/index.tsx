import AboutContent from "@/components/AboutContent";
import BreadCrumb from "@/components/BreadCrumb";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
          <title>Sobre</title>
          <meta name="description" content="About page content description" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap"/>
      </Head>
      <BreadCrumb />
      <AboutContent />
    </>
  );
}

export default About;
