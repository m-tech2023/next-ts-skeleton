import styles from "./styles.module.scss";
import Carousel from "@/components/Common/Carousel";
import React from "react";
import Sponsors from "@/public/u403.svg";
import SponsorsTwo from "@/public/u410.svg";
import SponsorsThird from "@/public/u409.svg";
import Access from "@/public/u394.svg";
import Image from "next/image";

const slides = [
  {
    url: Sponsors,
    name: "Patrocinador",
  },
  {
    url: SponsorsTwo,
    name: "Patrocinador",
  },
  {
    url: SponsorsThird,
    name: "Patrocinador",
  },
  {
    url: Sponsors,
    name: "Patrocinador",
  },
  {
    url: SponsorsThird,
    name: "Patrocinador",
  },
  {
    url: SponsorsTwo,
    name: "Patrocinador",
  },
];

const CarouselSponsors = () => {
  return (
    <>
      <div className={styles.container_desktop}>
        <Carousel
          itemsPerSlide={3}
          slides={slides.map((slide, index) => (
            <div key={index} className={styles.carousel}>
              <div className={styles.container_sponsers}>
                <Image src={slide.url} alt={slide.name} />
                <div className={styles.container_access}>
                  <p className={styles.sub_title}>Conheça</p>
                  <Image src={Access} alt="Acesse" />
                </div>
              </div>
            </div>
          ))}
        ></Carousel>
      </div>
      <div className={styles.container_tablet}>
        <Carousel
          itemsPerSlide={2}
          slides={slides.map((slide, index) => (
            <div key={index} className={styles.carousel}>
              <div className={styles.container_sponsers}>
                <Image src={slide.url} alt={slide.name} />
                <div className={styles.container_access}>
                  <p className={styles.sub_title}>Conheça</p>
                  <Image src={Access} alt="Acesse" />
                </div>
              </div>
            </div>
          ))}
        ></Carousel>
      </div>
      <div className={styles.container_mobile}>
        <Carousel
          itemsPerSlide={1}
          slides={slides.map((slide, index) => (
            <div key={index} className={styles.carousel}>
              <div className={styles.container_sponsers}>
                <Image src={slide.url} alt={slide.name} />
                <div className={styles.container_access}>
                  <p className={styles.sub_title}>Conheça</p>
                  <Image src={Access} alt="Acesse" />
                </div>
              </div>
            </div>
          ))}
        ></Carousel>
      </div>
    </>
  );
};

export default CarouselSponsors;
