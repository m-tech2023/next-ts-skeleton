import BreadCrumb from "@/components/Common/BreadCrumb";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";
import Header from "@/components/Common/Header";

const MyBidsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Meus lances"
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
export default MyBidsPage;
