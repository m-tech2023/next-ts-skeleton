import styles from "./styles.module.scss";
import React from "react";
import schedule from "@/public/u699.svg";
import favorite from "@/public/u700.svg";
import shared from "@/public/u701.svg";
import Image from "next/image";
import Link from "next/link";

const Enable = () => {
  return (
    <div className={styles.container}>
      <Link href={""} className={styles.container_enable}>
        <p>HABILITE-SE</p>
      </Link>
      <div className={styles.container_links}>
        <Link href={""}>
          <Image src={schedule} alt="Agendar" />
        </Link>
        <Link href={""}>
          <Image src={shared} alt="Compartilhar" />
        </Link>
        <Link href={""}>
          <Image src={favorite} alt="Favoritar" />
        </Link>
      </div>
    </div>
  );
};

export default Enable;
