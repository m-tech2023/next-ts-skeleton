import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import ComponentGrid from "@/components/Myaccount/Grid";
import styles from "../styles.module.scss";

const DataAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Dados de acesso" />
      </div>
      <BreadCrumb lastText={styles.lastName} />
      <ComponentGrid />
      <div className={styles.container_data}></div>
    </div>
  );
};
export default DataAcessPage;
