import Auctions from "@/components/Common/Auctions";
import Card from "@/components/Common/Card";
import CardContato from "@/components/Common/CardContato";
import CardsHome from "@/components/Common/CardHome";
import ControlledCarousel from "@/components/Common/ControlledCarousel";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
          <title>Home page</title>
          <meta name="description" content="Home page content description" />
      </Head>
      

     <ControlledCarousel/>

     <Auctions/>

     <CardsHome/>

     <Card/>

     <CardContato/>
    </>

  );
}

export default Home;
