import BreadCrumb from "@/components/Common/BreadCrumb";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";
import Header from "@/components/Common/Header";

const LogsAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Logs de acessos" />
      </div>
      <BreadCrumb />
      <Grid />
    </div>
  );
};
export default LogsAcessPage;
