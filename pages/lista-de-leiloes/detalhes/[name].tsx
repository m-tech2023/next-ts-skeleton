import styles from "./styles.module.scss";
import React from "react";
import Date from "@/public/u483.svg";
import Favorite from "@/public/u486.svg";
import Compart from "@/public/u489.svg";
import Image from "next/image";
import Title from "@/components/Common/Title";
import Banner from "@/components/Auction/Details/Banner";
import CarouselSponsors from "@/components/Auction/Details/Carousel";
import Informations from "@/components/Auction/Details/Informations";
import Enable from "@/components/Auction/Details/Enable";
import Lote from "@/components/Auction/Details/Lote";

const Details = () => {
  return (
    <div className={`${styles.container} container`}>
      <Banner />
      <div className={styles.container_content}>
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
        <Enable />
        <div className={styles.container_info}>
          <Title title="Informações" color="#37406d" />
          <Informations />
        </div>
        <div className={styles.sponsors}>
          <Title title="Patrocinadores" color="#37406d" />
          <CarouselSponsors />
        </div>
        <div className={styles.lotes}>
          <Title title="Lotes" color="#37406d" />
          <div className={styles.container_data}>
            <Lote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
