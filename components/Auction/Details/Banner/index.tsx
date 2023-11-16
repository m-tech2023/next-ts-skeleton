import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import moment from "moment";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Image from "next/image";
import Streaming from "@/public/streaming_icon_u10.svg";
import Online from "@/public/u164.gif";
import Horse from "@/public/img-teste.jpg";

const Auction = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calculateTime = () => {
    const auctionDate = moment("2023-11-30T20:00:00");
    const now = moment();

    const difference = moment.duration(auctionDate.diff(now));

    const days = difference.days();
    const hours = difference.hours();
    const minutes = difference.minutes();
    const seconds = difference.seconds();

    setTime({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container_auction}>
      <BreadCrumb color="white" />
      <h1 className={styles.title}>LEILÃO VIRTUAL SHOW HORSES</h1>
      <div className={styles.background}>
        <Image src={Horse} alt="Cavalo" />
      </div>
      <div className={styles.container_transmission}>
        <Image src={Streaming} alt="" />
        <p className={styles.sub_title}>Transmissão</p>
        <div className={styles.container_streaming}>
          <div className={styles.container_img}>
            <Image src={Online} alt="" />
          </div>
          <div className={styles.container_online}>
            <p className={styles.sub_title}>ASSISTIR</p>
          </div>
        </div>
      </div>
      <div className={styles.date}>
        <p className={styles.sub_title}>05/09/2023 às 20:00</p>
      </div>
      <div className={styles.container_cube}>
        <div className={styles.cube}>
          <h1>{time.days}</h1>
          <p>Dias</p>
        </div>
        <div className={styles.cube}>
          <h1>{time.hours}</h1>
          <p>Horas</p>
        </div>
        <div className={styles.cube}>
          <h1>{time.minutes}</h1>
          <p>Minutos</p>
        </div>
        <div className={styles.cube}>
          <h1>{time.seconds}</h1>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;
