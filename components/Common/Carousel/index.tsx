import styles from "./styles.module.scss";
import CarouselComponent from "react-bootstrap/Carousel";
import img_teste from "@/public/img-teste.jpg";
import img_teste_two from "@/public/img-teste-two.png";
import img_teste_third from "@/public/img-teste-third.jpg";
import Image from "next/image";

const data = [
  {
    img: img_teste,
    alt: "Cavalo",
  },
  {
    img: img_teste_two,
    alt: "Cavalo",
  },
  {
    img: img_teste_third,
    alt: "Cavalo",
  },
];

const Carousel = () => {
  return (
    <CarouselComponent className={styles.carousel}>
      {data.map((data) => (
        <CarouselComponent.Item>
          <Image src={data.img} alt={data.alt} className={styles.img}></Image>
        </CarouselComponent.Item>
      ))}
    </CarouselComponent>
  );
};
export default Carousel;
