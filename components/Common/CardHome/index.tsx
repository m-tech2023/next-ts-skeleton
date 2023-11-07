import Carousel from '@/components/Common/Carousel';

import STREAMING from '@/public/icon/normal_streaming.svg';
import Image from 'next/image';

const cardData = [
  {
    title: '2º LEILÃO VIRTUAL COWBOYS COMPANY',
    streamingDate: '05/09/2023 às 20:00',
    preBidsStart: '28/08/2023 às 08:00',
    preBidsEnd: '05/09/2023 às 18:00',
    breeds: ['Appaloosa', 'Brasileiro de Hipismo', 'Paint Horse'],
  },
  {
    title: '2º LEILÃO VIRTUAL COWBOYS TESTE',
    streamingDate: '05/09/2023 às 20:00',
    preBidsStart: '28/08/2023 às 08:00',
    preBidsEnd: '05/09/2023 às 18:00',
    breeds: ['Paraíba', 'Brasileiro de Hipismo', 'Paint Horse'],
  },
  {
    title: '2º LEILÃO VIRTUAL COWBOYS TESTE',
    streamingDate: '05/09/2023 às 20:00',
    preBidsStart: '28/08/2023 às 08:00',
    preBidsEnd: '05/09/2023 às 18:00',
    breeds: ['Paraíba', 'Brasileiro de Hipismo', 'Paint Horse'],
  },
];

function CardComponent({ data }) {
  return (
    <div
      className="card"
      style={{ boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.35)" }}
    >
      <div className="card-body" style={{ backgroundColor: "#D8D8D8" }}>
        <h4 className="card-title fw-bolder text-center mt-2 mb-2">
          {data.title}
        </h4>
        <p className="card-text text-center">
          <Image src={STREAMING} alt="Menu Icon" className="menu-icon" />{" "}
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
                  style={{ borderLeft: "5px solid #63a103", fontSize: "13px" }}
                >
                  <strong>Início:</strong> {data.preBidsStart}
                </p>
              </div>
              <br />
              <div className="row">
                <p
                  style={{ borderLeft: "5px solid #910012", fontSize: "13px" }}
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
  );
}

function CardsHome() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <h2 className="fw-bolder">Próximos leilões</h2>
        <small className="d-flex justify-content-between align-items-center mb-0">
          VER TODOS <i className="bi bi-chevron-right"></i>
        </small>
      </div>

      <Carousel
        slides={cardData.map((slide, index) => (
          <CardComponent key={index} data={slide} />
        ))}
      />
    </div>
  );
}

export default CardsHome;