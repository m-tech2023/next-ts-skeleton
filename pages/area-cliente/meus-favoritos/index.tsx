import styles from "../styles.module.scss";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import Grid from "@/components/Common/Grid";
import ImageHorse1 from "@/public/img-teste.jpg";
import ImageHorse2 from "@/public/img-teste-two.png";
import ImageHorse3 from "@/public/img-teste-third.jpg";
import { CardComponent } from "@/components/Home/CardHome";

const data = [
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
    title: "2º LEILÃO VIRTUAL HARAS TESTE",
    streamingDate: "05/09/2023 às 20:00",
    preBidsStart: "28/08/2023 às 08:00",
    preBidsEnd: "05/09/2023 às 18:00",
    breeds: ["Paraíba", "Brasileiro de Hipismo", "Paint Horse"],
  },
];

const MyFavoritePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Meus favoritos"
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
        />
      </div>
      <BreadCrumb />
      <Grid />
      <div className={`${styles.container_data} mt-5`}>
        {data.map((data, index) => (
          <div key={index} className={styles.favorite}>
            <CardComponent data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyFavoritePage;
