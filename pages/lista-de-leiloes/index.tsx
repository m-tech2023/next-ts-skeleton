import Header from "@/components/Common/Header";
import styles from "./styles.module.scss";
import React from "react";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Search from "@/components/Auction/Search";

const Leiloes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Lista de leilões" classNameTitle={styles.title} />
      </div>
      <div className={`${styles.container_data} container`}>
        <BreadCrumb />
        <Search />
      </div>
    </div>
  );
};

export default Leiloes;
