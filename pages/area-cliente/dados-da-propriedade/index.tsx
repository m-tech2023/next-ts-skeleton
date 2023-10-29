import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import FormDataProperties from "@/components/Myaccount/FormDataProperties";
import ComponentGrid from "@/components/Myaccount/Grid";
import styles from "../styles.module.scss";

const DataProperties = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Dados propriedade" />
      </div>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb lastText={styles.lastName} />
      </div>
      <div className={styles.container_grid}>
        <ComponentGrid />
      </div>
      <div className={styles.container_data}>
        <FormDataProperties />
      </div>
    </div>
  );
};
export default DataProperties;
