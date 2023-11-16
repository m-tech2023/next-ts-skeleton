import Input from "@/components/Common/Input";
import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image";
import Icon from "@/public/u388.svg";
import Filter from "@/public/u386.svg";
import { ModalFilter } from "@/components/Common/Modal";

const Search = () => {
  return (
    <div className={styles.container}>
      <ModalFilter />
      <a
        className={styles.filter}
        data-bs-toggle="modal"
        data-bs-target="#modalFilter"
        role="button"
      >
        <Image src={Filter} alt="Filtros" />
        Filtros
      </a>
      <form className={styles.form}>
        <div className={styles.formgroup}>
          <Input className={styles.input} placeholder="Pesquise pelo nome..." />
          <Image src={Icon} alt="Procurar" className={styles.img} />
        </div>
      </form>
    </div>
  );
};

export default Search;
