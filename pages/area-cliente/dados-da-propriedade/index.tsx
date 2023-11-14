import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import FormDataProperties from "@/components/Myaccount/Forms/FormDataProperties";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";

const DataProperties = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Dados propriedade"
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
        />
      </div>
      <BreadCrumb />
      <Grid />
      <div className={`${styles.container_data} mt-4`}>
        <FormDataProperties />
      </div>
    </div>
  );
};
export default DataProperties;
