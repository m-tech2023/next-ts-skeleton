import React from "react";
import styles from "../../components/Common/Carousel/styles.module.scss";
import Carousel from "@/components/Common/Carousel";
import icon_transmission from "@/public/streaming_icon_u10.png";
import Image from "next/image";

const slides = [
  {
    title: "Leilão 1",
    date: "01/11/2023",
    hour_live: "15:00",
    start: "28/10/2023 às 10:00",
    end: "31/10/2023 às 18:00",
    races: ["Appaloosa", "Brasileiro de Hipismo"],
    image:
      "https://files.axshare.com/gsc/VPA5BX/58/62/f8/5862f8046670489a9b64a09628bcd39b/images/home/u1.png?pageId=410ff80e-364a-4d6b-ba72-a7540e2c7725",
    alt_image: "Cavalo",
  },
  {
    title: "Leilão 2",
    date: "05/11/2023",
    hour_live: "14:30",
    start: "01/11/2023 às 08:00",
    end: "03/11/2023 às 20:00",
    races: ["Paint Horse", "Quarter Horse"],
    image:
      "https://www.petz.com.br/blog/wp-content/uploads/2023/07/racas-de-cavalo3.jpg",
    alt_image: "Cavalo",
  },
  {
    title: "Leilão 3",
    date: "05/11/2023",
    hour_live: "14:30",
    start: "01/11/2023 às 08:00",
    end: "03/11/2023 às 20:00",
    races: ["Paint Horse", "Quarter Horse"],
    image:
      "https://www.lancerural.com.br/wp-content/uploads/2022/04/CRIOULO.jpg",
    alt_image: "Cavalo",
  },
];

const Example = () => {
  return (
    <div className={`styles.container_carousel pt-5`}>
      <Carousel
        slides={slides.map((slide, index) => (
          <div className={styles.container} key={index}>
            <div className={styles.info}>
              <div className={styles.title}>
                <h1>{slide.title}</h1>
              </div>
              <div className={styles.transmission}>
                <div className={styles.transmisison_title}>
                  <Image
                    src={icon_transmission}
                    alt="Icone transmissão"
                    className={styles.icon}
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
        ))}
      ></Carousel>
    </div>
  );
};

export default Example;
