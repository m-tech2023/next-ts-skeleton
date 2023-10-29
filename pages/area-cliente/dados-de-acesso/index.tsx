import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import ComponentGrid from "@/components/Myaccount/grid";
import styles from "../styles.module.scss";

const DataAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Dados de acesso" />
      </div>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb lastText={styles.lastName}/>
      </div>
      <div className={styles.container_grid}>
        <ComponentGrid />
      </div>
      <div className={styles.container_data}></div>
    </div>
  );
};
export default DataAcessPage;
