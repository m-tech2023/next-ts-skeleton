import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";
import FormDataAccess from "@/components/Myaccount/Forms/FormDataAccess";

const DataAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Dados de acesso"
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
        />
      </div>
      <BreadCrumb />
      <Grid />
      <div className={`${styles.container_data} mt-5`}>
        <FormDataAccess />
      </div>
    </div>
  );
};
export default DataAcessPage;
