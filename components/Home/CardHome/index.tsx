import styles from "./styles.module.scss";
import Carousel from "@/components/Common/Carousel";
import STREAMING from "@/public/icon/normal_streaming.svg";
import Image from "next/image";
import Favorite from "@/public/u332.svg";
import FavoriteSelected from "@/public/u332_selected.svg";
import ImageHorse1 from "@/public/img-teste.jpg";
import ImageHorse2 from "@/public/img-teste-two.png";
import ImageHorse3 from "@/public/img-teste-third.jpg";
import { useState } from "react";

const cardData = [
  {
    img: ImageHorse1,
    title: "1º LEILÃO VIRTUAL COWBOYS COMPANY",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Appaloosa", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    img: ImageHorse2,
    title: "2º LEILÃO VIRTUAL HARAS TESTE",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Paraíba", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    img: ImageHorse3,
    title: "3º LEILÃO VIRTUAL TESTE",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Paraíba", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    img: ImageHorse3,
    title: "4º LEILÃO VIRTUAL TESTE",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Paraíba", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    img: ImageHorse3,
    title: "5º LEILÃO VIRTUAL TESTE",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Paraíba", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    img: ImageHorse3,
    title: "6º LEILÃO VIRTUAL TESTE",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Paraíba", "Brasileiro de Hipismo", "Paint Horse"],
  },
];

function CardComponent({ data }) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.card}>
        <Image src={data.img} alt={data.title} className={styles.img} />
        <div className={styles.favorite} onClick={handleClick}>
          {click ? (
            <Image src={FavoriteSelected} alt="Favoritar" />
          ) : (
            <Image src={Favorite} alt="Favoritar" />
          )}
        </div>
        <div
          className={styles.card_body}
          style={{ backgroundColor: "#D8D8D8" }}
        >
          <h6 className="card-title fw-bolder text-center pt-2 pb-2">
            {data.title}
          </h6>
          <div className="card-text text-center d-flex justify-content-center align-items-center mb-3">
            <Image
              src={STREAMING}
              alt="transmissão"
              style={{ margin: "0 5px" }}
            />
            <strong>Transmissão:</strong>
            <p style={{ margin: "0 5px" }}>{data.streamingDate}</p>
          </div>
          <div className={styles.pre_lance}>
            <div className="row" style={{ backgroundColor: "#FDFDFD" }}>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <h4 style={{ fontSize: "13px" }}>
                  <strong>Pré-lances:</strong>
                </h4>
              </div>
              <div className="col-8">
                <div className="row mt-3">
                  <p
                    style={{
                      borderLeft: "5px solid #63a103",
                      fontSize: "13px",
                    }}
                  >
                    <strong>Início:</strong> {data.preBidsStart}
                  </p>
                </div>
                <br />
                <div className="row">
                  <p
                    style={{
                      borderLeft: "5px solid #910012",
                      fontSize: "13px",
                      marginTop: "-25px",
                    }}
                  >
                    <strong>Término:</strong> {data.preBidsEnd}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.breed}>
            {data.breeds.map((breed, index) => (
              <span className="badge bg-light text-dark" key={index}>
                {breed}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsHome() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <h2 className="fw-bolder">Próximos leilões</h2>
        <small
          className="d-flex justify-content-between align-items-center mb-0"
          style={{ fontWeight: 600 }}
        >
          VER TODOS <i className="bi bi-chevron-right"></i>
        </small>
      </div>

      <div className={styles.container_desktop}>
        <Carousel
          slides={cardData.map((slide, index) => (
            <CardComponent key={index} data={slide} />
          ))}
          itemsPerSlide={3}
        />
      </div>

      <div className={styles.container_tablet}>
        <Carousel
          slides={cardData.map((slide, index) => (
            <CardComponent key={index} data={slide} />
          ))}
          itemsPerSlide={2}
        />
      </div>

      <div className={styles.container_mobile}>
        <Carousel
          slides={cardData.map((slide, index) => (
            <CardComponent key={index} data={slide} />
          ))}
          itemsPerSlide={1}
        />
      </div>
    </div>
  );
}

export default CardsHome;
