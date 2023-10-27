import BreadCrumb from "../../components/BreadCrumb";
import Head from "next/head";
import Link from "next/link";
import PreRegisterForm from "@/components/PreRegisterForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Cadastre-se</title>
        <meta name="description" content="Contact page content description" />
      </Head>
      <BreadCrumb />
      <PreRegisterForm />
    </>
  );
}

export default Contact;
