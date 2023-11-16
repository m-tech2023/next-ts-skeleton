import styles from "./styles.module.scss";
import React, { useState } from "react";
import Horse from "@/public/img-teste.jpg";
import Image from "next/image";
import Favorite from "@/public/u332.svg";
import FavoriteSelected from "@/public/u332_selected.svg";
import Male from "@/public/gender_male.png";
import Female from "@/public/gender_female.png";

const data = [
  {
    horse: "DIESEL BLACK ILUSION",
    father: "BLACKSON CASH",
    grandfather: "BIG CONNECTION WLMJ",
    mother: "LADY CHANEL HT",
    grandmother: "LADY CHANEL HT",
    race: "Quarto de milha",
    blood: "PO",
    date: "09/10/2020",
    skin: "Castanho",
    height: "1,50",
    weigth: "120kg",
    category: "XPTO",
    seller: "Fazenda São Luiz do Pinhal",
    local: "Angutava/SP",
    lance: "250,00",
  },
  {
    horse: "DIESEL BLACK ILUSION",
    father: "BLACKSON CASH",
    grandfather: "BIG CONNECTION WLMJ",
    mother: "LADY CHANEL HT",
    grandmother: "LADY CHANEL HT",
    race: "Quarto de milha",
    blood: "PO",
    date: "09/10/2020",
    skin: "Castanho",
    height: "1,50",
    weigth: "120kg",
    category: "XPTO",
    seller: "Fazenda São Luiz do Pinhal",
    local: "Angutava/SP",
    lance: "250,00",
  },
  {
    horse: "DIESEL BLACK ILUSION",
    father: "BLACKSON CASH",
    grandfather: "BIG CONNECTION WLMJ",
    mother: "LADY CHANEL HT",
    grandmother: "LADY CHANEL HT",
    race: "Quarto de milha",
    blood: "PO",
    date: "09/10/2020",
    skin: "Castanho",
    height: "1,50",
    weigth: "120kg",
    category: "XPTO",
    seller: "Fazenda São Luiz do Pinhal",
    local: "Angutava/SP",
    lance: "250,00",
  },
];

const Lote = () => {
  const [gender, setGender] = useState(false);
  const [favorites, setFavorites] = useState({});

  const handleFavorite = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.horse}>
            <Image src={Horse} alt="Cavalo" className={styles.img} />
            <div className={styles.title_lote}>
              <p>{`Lote ${String(index + 1).padStart(2, "0")}`}</p>
            </div>
            <div
              className={styles.favorite}
              onClick={() => handleFavorite(index)}
            >
              {favorites[index] ? (
                <Image src={FavoriteSelected} alt="Favoritado" />
              ) : (
                <Image src={Favorite} alt="Favoritar" />
              )}
            </div>
            <div className={styles.title}>
              {gender ? (
                <Image src={Female} alt="Femea" className={styles.gender} />
              ) : (
                <Image src={Male} alt="Macho" className={styles.gender} />
              )}

              <p>{item.horse}</p>
            </div>
          </div>
          <div className={`${styles.family} mt-2 mb-2`}>
            <div className={styles.container_family}>
              <div className={styles.container_line}>
                <p className={styles.male}>PAI</p>
                <p className={styles.name_male}>{item.father}</p>
              </div>
              <div className={styles.container_line}>
                <p className={styles.female}>MÂE</p>
                <p className={styles.name_female}>{item.mother}</p>
              </div>
            </div>
            <div className={styles.container_family}>
              <div className={styles.container_line}>
                <p className={styles.male}>AVÔ</p>
                <p className={styles.name_male}>{item.grandfather}</p>
              </div>
              <div className={styles.container_line}>
                <p className={styles.female}>AVÓ</p>
                <p className={styles.name_female}>{item.grandmother}</p>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.table}>
              <div className={styles.thead}>
                <p className={styles.row}>
                  Raça: <strong>{item.race}</strong>
                </p>
                <p className={styles.row}>
                  Grau de Sangue: <strong>{item.blood}</strong>
                </p>
                <p className={styles.row}>
                  Nasc: <strong>{item.date}</strong>
                </p>
                <p className={styles.row}>
                  Pelo: <strong>{item.skin}</strong>
                </p>
              </div>
              <div className={styles.tbody}>
                <p className={styles.row}>
                  Altura aprox: <strong>{item.height}</strong>
                </p>
                <p className={styles.row}>
                  Peso aprox: <strong>{item.weigth}</strong>
                </p>
                <p className={styles.row}>
                  Categoria: <strong>{item.category}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.seller}>
            <p>
              Vendedor: <strong>{item.seller}</strong>
            </p>
            <p>
              Local: <strong>{item.local}</strong>
            </p>
          </div>
          <div className={styles.lance}>
            <p>Lance inicial:</p>
            <p>
              <strong>R$ {item.lance}</strong> x 40 parcelas
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Lote;
