import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";

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
      <div className={styles.container_data}></div>
    </div>
  );
};
export default MyFavoritePage;
