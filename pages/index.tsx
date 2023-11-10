import Auctions from "@/components/Home/Auctions";
import Card from "@/components/Home/Card";
import CardContato from "@/components/Home/CardContato";
import CardsHome from "@/components/Home/CardHome";
import Head from "next/head";
import CarouselHome from "@/components/Home/Carousel";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page content description" />
      </Head>

      <CarouselHome />

      <Auctions />

      <CardsHome />

      <Card />

      <CardContato />
    </>
  );
};

export default Home;
