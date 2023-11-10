import Image from "next/image";
import Carousel from "../../Common/Carousel";
import styles from "../../Common/Carousel/styles.module.scss";
import Streaming from "@/public/streaming_icon_u10.svg";
import Horse1 from "@/public/img-teste.jpg";
import Horse2 from "@/public/img-teste-two.png";
import Horse3 from "@/public/img-teste-third.jpg";

const slides = [
  {
    title: "LEILÃO VIRTUAL HARAS NOVA POUSADA",
    date: "01/11/2023",
    hour_live: "15:00",
    start: "28/10/2023 às 10:00",
    end: "31/10/2023 às 18:00",
    races: ["Appaloosa", "Brasileiro de Hipismo"],
    image: Horse1,
    alt_image: "Cavalo",
  },
  {
    title: "LEILÃO VIRTUAL NA PEGADA DO LOBO",
    date: "05/11/2023",
    hour_live: "14:30",
    start: "27/11/2023 às 08:00",
    end: "05/12/2023 às 18:00",
    races: ["Paint Horse", "Quarter Horse"],
    image: Horse2,
    alt_image: "Cavalo",
  },
  {
    title: "LEILÃO OFICIAL ABCCT CAVALO TROTADOR",
    date: "04/12/2023",
    hour_live: "20:00",
    start: "04/12/2023 às 08:00",
    end: "12/12/2023 às 18:00",
    races: ["Paint Horse", "Quarter Horse"],
    image: Horse3,
    alt_image: "Cavalo",
  },
];

const CarouselHome = () => {
  return (
    <Carousel
      itemsPerSlide={1}
      slides={slides.map((slide, index) => (
        <div key={index} className={styles.containerCarousel}>
          <div className={`${styles.container} mt-5`}>
            <div className={styles.info}>
              <div className={styles.container_title}>
                <h1 className={styles.title}>{slide.title}</h1>
              </div>
              <div className={styles.transmission}>
                <div className={styles.transmisison_title}>
                  <Image
                    src={Streaming}
                    alt="transmissão"
                    width={32}
                    height={16}
                  />
                  <h1 className={styles.title}>Transmissão</h1>
                </div>
                <p className={styles.title_hour_live}>
                  {slide.date} às {slide.hour_live}
                </p>
              </div>
              <div className={styles.contaienr_lance}>
                <p className={styles.title} style={{ fontWeight: "600" }}>
                  Pré lances:
                </p>
                <p className={styles.start}>Inicio: {slide.start}</p>
                <p className={styles.end}>Término: {slide.end}</p>
              </div>
              <div className={styles.container_race}>
                {slide.races.map((race, raceIndex) => (
                  <p className={styles.title} key={raceIndex}>
                    {race}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.container_horse}>
              <Image src={slide.image} alt={slide.alt_image} />
            </div>
          </div>
        </div>
      ))}
    ></Carousel>
  );
};
export default CarouselHome;
