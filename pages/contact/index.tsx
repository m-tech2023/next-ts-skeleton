import BreadCrumb from "../../components/BreadCrumb";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Contact page content description" />
      </Head>
      <BreadCrumb />
      <ContactForm />
    </>
  );
}

export default Contact;
