import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import FormPersonalData from "@/components/Myaccount/Forms/FormPersonalData";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";
const DataPersonalPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Dados pessoais"
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
        />
      </div>
      <BreadCrumb />
      <Grid />
      <div className={`${styles.container_data} mt-4`}>
        <FormPersonalData />
      </div>
    </div>
  );
};
export default DataPersonalPage;
