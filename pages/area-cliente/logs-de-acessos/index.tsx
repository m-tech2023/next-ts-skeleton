import ComponentHeader from "@/components/Myaccount/header";
import styles from "../styles.module.scss";
import BreadCrumb from "@/components/Myaccount/breadcrumb";
import ComponentGrid from "@/components/Myaccount/grid";

const LogsAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader title="Minha conta" text="Logs de acessos" />
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
