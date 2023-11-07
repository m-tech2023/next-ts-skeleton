import Auctions from "@/components/Common/Auctions";
import Card from "@/components/Common/Card";
import CardContato from "@/components/Common/CardContato";
import CardsHome from "@/components/Common/CardHome";
import Carousel from "@/components/Common/Carousel";
import Head from "next/head";
import styles from "../components/Common/Carousel/styles.module.scss";

const slides = [
  {
    title: "LEILÃO VIRTUAL HARAS NOVA POUSADA",
    date: "01/11/2023",
    hour_live: "15:00",
    start: "28/10/2023 às 10:00",
    end: "31/10/2023 às 18:00",
    races: ["Appaloosa", "Brasileiro de Hipismo"],
    image:
      "https://i.pinimg.com/originals/f0/37/e6/f037e664e26be6cbae951ff8e7091424.jpg",
    alt_image: "Cavalo",
  },
  {
    title: "LEILÃO VIRTUAL NA PEGADA DO LOBO",
    date: "05/11/2023",
    hour_live: "14:30",
    start: "27/11/2023 às 08:00",
    end: "05/12/2023 às 18:00",
    races: ["Paint Horse", "Quarter Horse"],
    image:
      "https://4.bp.blogspot.com/-eH76bdsRZVM/UwAvxIn1ttI/AAAAAAAAAC0/3DRX_9TCBqc/s1600/sera-que-ainda-existem-cavalos-selvagens-+(1).jpg",
    alt_image: "Cavalo",
  },
  {
    title: "LEILÃO OFICIAL ABCCT CAVALO TROTADOR",
    date: "04/12/2023",
    hour_live: "20:00",
    start: "04/12/2023 às 08:00",
    end: "12/12/2023 às 18:00",
    races: ["Paint Horse", "Quarter Horse"],
    image:
      "https://s1.1zoom.me/b4455/591/Horses_Sand_Run_Brown_561328_1920x1080.jpg",
    alt_image: "Cavalo",
  },
];

const Home = () => {
  return (
    <>
      <Head>
          <title>Home page</title>
          <meta name="description" content="Home page content description" />
      </Head>
      

      <Carousel
          slides={slides.map((slide, index) => (
            <div key={index} className={styles.containerCarousel}>
              <div className={`${styles.container} mt-5`}>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <h1>{slide.title}</h1>
                  </div>
                  <div className={styles.transmission}>
                    <div className={styles.transmisison_title}>
                      <img
                        src="https://files.axshare.com/gsc/VPA5BX/58/62/f8/5862f8046670489a9b64a09628bcd39b/images/home/streaming_icon_u10.svg?pageId=410ff80e-364a-4d6b-ba72-a7540e2c7725"
                        alt=""
                      />
                      <h1>TRANSMISSÃO</h1>
                    </div>
                    <p className={styles.date}>
                      {slide.date} às {slide.hour_live}
                    </p>
                  </div>
                  <div className={styles.lance}>
                    <p>Pré lances:</p>
                    <p className={styles.start}>Inicio: {slide.start}</p>
                    <p className={styles.end}>Término: {slide.end}</p>
                  </div>
                  <div className={styles.race}>
                    {slide.races.map((race, raceIndex) => (
                      <p key={raceIndex}>{race}</p>
                    ))}
                  </div>
                </div>
                <div className={styles.horse}>
                  <img src={slide.image} alt={slide.alt_image} />
                </div>
              </div>
            </div>
          ))}
        ></Carousel>

     <Auctions/>

     <CardsHome/>

     <Card/>

     <CardContato/>
    </>

  );
}

export default Home;
