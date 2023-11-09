import styles from "./styles.module.scss";
import Carousel from "@/components/Common/Carousel";
import STREAMING from "@/public/icon/normal_streaming.svg";
import Image from "next/image";
import ImageHorse1 from "@/public/img-teste.jpg";
import ImageHorse2 from "@/public/img-teste-two.png";
import ImageHorse3 from "@/public/img-teste-third.jpg";

const cardData = [
  {
    img: ImageHorse1,
    title: "2º LEILÃO VIRTUAL COWBOYS COMPANY",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Appaloosa", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    img: ImageHorse2,
    title: "3º LEILÃO VIRTUAL HARAS TESTE",
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
];

function CardComponent({ data }) {
  return (
    <div
      className={`row row-cols-1 row-cols-md-3 g-6 ${styles.container_mobile}`}
    >
      {cardData.map((data, index) => (
        <div key={index} className={`col-md-4 mb-4 ${styles.gridItem}`}>
          <div
            className={`card ${styles.card}`}
            style={{ boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.35)" }}
          >
            <Image src={data.img} alt={data.title} className={styles.img} />
            <div className="card-body" style={{ backgroundColor: "#D8D8D8" }}>
              <h6 className="card-title fw-bolder text-center mt-2 mb-2">
                {data.title}
              </h6>
              <p className="card-text text-center">
                <strong>Transmissão:</strong> {data.streamingDate}
              </p>
              <div className="mb-3 p-2">
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
                        }}
                      >
                        <strong>Término:</strong> {data.preBidsEnd}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                {data.breeds.map((breed, index) => (
                  <span className="badge bg-light text-dark" key={index}>
                    {breed}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CardsHome() {
  return (
    <div className="container mt-5 ">
      <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <h2 className="fw-bolder">Próximos leilões</h2>
        <small
          className="d-flex justify-content-between align-items-center mb-0"
          style={{ fontWeight: 600 }}
        >
          VER TODOS <i className="bi bi-chevron-right"></i>
        </small>
      </div>

      <div
        className={`row row-cols-1 row-cols-md-3 g-6 ${styles.container_desktop}`}
      >
        {cardData.map((data, index) => (
          <div key={index} className={`col-md-4 mb-4 ${styles.gridItem}`}>
            <div
              className={`card ${styles.card}`}
              style={{ boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.35)" }}
            >
              <Image src={data.img} alt={data.title} className={styles.img} />
              <div className="card-body" style={{ backgroundColor: "#D8D8D8" }}>
                <h6 className="card-title fw-bolder text-center mt-2 mb-2">
                  {data.title}
                </h6>
                <p className="card-text text-center">
                  <strong>Transmissão:</strong> {data.streamingDate}
                </p>
                <div className="mb-3 p-2">
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
                          }}
                        >
                          <strong>Término:</strong> {data.preBidsEnd}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  {data.breeds.map((breed, index) => (
                    <span className="badge bg-light text-dark" key={index}>
                      {breed}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.container_mobile}>
        <Carousel
          slides={cardData.map((slide, index) => (
            <CardComponent key={index} data={slide} />
          ))}
        />
      </div>
    </div>
  );
}

export default CardsHome;
