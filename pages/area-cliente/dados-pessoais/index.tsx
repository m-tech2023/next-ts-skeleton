import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import FormPersonalData from "@/components/Myaccount/Forms/FormPersonalData";
import ComponentGrid from "@/components/Myaccount/Grid";
import styles from "../styles.module.scss";
const DataPersonalPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Dados pessoais" />
      </div>
      <BreadCrumb lastText={styles.lastName} />
      <ComponentGrid />
      <div className={styles.container_data}>
        <FormPersonalData />
      </div>
    </div>
  );
};
export default DataPersonalPage;
