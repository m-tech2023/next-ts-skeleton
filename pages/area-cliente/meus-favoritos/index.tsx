import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import ComponentGrid from "@/components/Myaccount/grid";
import styles from "../styles.module.scss";

const MyFavoritePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Meus favoritos" />
      </div>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb lastText={styles.lastName} />
      </div>
      <div className={styles.container_grid}>
        <ComponentGrid />
      </div>
      <div className={styles.container_data}></div>
    </div>
  );
};
export default MyFavoritePage;
