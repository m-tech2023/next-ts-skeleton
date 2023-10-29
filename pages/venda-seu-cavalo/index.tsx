import BreadCrumb from "@/components/Common/BreadCrumb";
import Head from "next/head";

const VendaSeuCavalo = () => {
  return (
    <>
      <Head>
          <title>Venda seu cavalo</title>
          <meta name="description" content="Venda seu cavalo na Opportunity Leilões" />
      </Head>
      <BreadCrumb lastText="Venda seu cavalo" />
    </>
  );
}

export default VendaSeuCavalo;
