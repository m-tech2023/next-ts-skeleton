import styles from "./styles.module.scss";
import React from "react";
import Date from "@/public/u483.svg";
import Favorite from "@/public/u486.svg";
import Compart from "@/public/u489.svg";
import Image from "next/image";
import Title from "@/components/Common/Title";
import Auction from "@/components/Details/Auction";
import CarouselSponsors from "@/components/Details/Carousel";

const Details = () => {
  return (
    <div className={`${styles.container} container`}>
      <Auction />
      <div className={styles.container_redes}>
        <div className={styles.rede}>
          <Image src={Date} alt="" />
          <p className={styles.title}>Lembrete</p>
        </div>
        <div className={styles.rede}>
          <Image src={Favorite} alt="" />
          <p className={styles.title}>Favorito</p>
        </div>
        <div className={styles.rede}>
          <Image src={Compart} alt="" />
          <p className={styles.title}>Compart.</p>
        </div>
      </div>
      <div className={styles.container_info}></div>
      <div className={styles.sponsors}>
        <Title title="Patrocinadores" color="#37406d" />
        <CarouselSponsors />
      </div>
      <div className={styles.lotes}></div>
    </div>
  );
};

export default Details;
