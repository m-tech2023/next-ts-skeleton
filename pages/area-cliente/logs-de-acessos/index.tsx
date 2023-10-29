import BreadCrumb from "@/components/Common/BreadCrumb";
import ComponentGrid from "@/components/Myaccount/grid";
import styles from "../styles.module.scss";

const LogsAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Logs de acessos" />
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
    </div>
  );
};
export default LogsAcessPage;
