import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import CarouselWithAutoSlide from "../Carousel";

import STREAMING from "@/public/icon/normal_streaming_pink.svg";
import HORSE from "@/public/img/u1.png";

const leilaoData = [
  {
    title: "LEILÃO VIRTUAL HARAS NOVA POUSADA",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Appaloosa", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    title: "LEILÃO VIRTUAL HARAS NOVA TEST",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["test", "Brasileiro de Hipismo", "Paint Horse"],
  },
  {
    title: "LEILÃO VIRTUAL HARAS NOVA POUSADA",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Appaloosa", "Brasileiro de Hipismo", "Paint Horse"],
  },
];

function CardComponent({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="card ps-4 "
      style={{
        backgroundImage: `url(${HORSE})`,
        position: "relative",
        filter: "brightness(50%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content">
        <h3 className="text-white mt-5">{data.title}</h3>

        <p className="text-white">
          <Image src={STREAMING} alt="Menu Icon" className="menu-icon me-2" />
          <strong>Transmissão</strong>
        </p>
        <p className="text-white">{data.streamingDate}</p>

        <div className="row">
          <p
            className="text-white"
            style={{ fontSize: "13px", textAlign: "left" }}
          >
            <strong>Pré-lances</strong>
          </p>
          <p
            className="text-white"
            style={{ borderLeft: "5px solid #63a103", fontSize: "13px" }}
          >
            <strong>Início:</strong> {data.preBidsStart}
          </p>
          <p
            className="text-white"
            style={{ borderLeft: "5px solid #910012", fontSize: "13px" }}
          >
            <strong>Término:</strong> {data.preBidsEnd}
          </p>
        </div>

        <div className="row d-flex justify-content-around mb-3">
          <Stack
            style={{ display: "flex", justifyContent: "space-around" }}
            direction="horizontal"
            gap={2}
          >
            {data.breeds.map((breed, index) => (
              <Badge bg="light" text="dark" key={index}>
                {breed}
              </Badge>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}

function ControlledCarousel() {
  return <div className="mt-5"></div>;
}

export default ControlledCarousel;
