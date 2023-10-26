import styles from "../styles.module.scss";
import ComponentHeader from "@/components/Myaccount/header";
import ComponentGrid from "@/components/Myaccount/grid";
import FormPersonalData from "@/components/Myaccount/formPersonalData";
import BreadCrumb from "@/components/Myaccount/breadcrumb";
const DataPersonalPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader title="Minha conta" text="Dados pessoais" />
      </div>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb
          className={styles.link}
          classNameIcon={styles.icon}
          lastText={styles.lastName}
        />
      </div>
      <div className={styles.container_grid}>
        <ComponentGrid />
      </div>
      <div className={styles.container_data}>
        <FormPersonalData />
      </div>
    </div>
  );
};
export default DataPersonalPage;
