import styles from "../styles.module.scss";
import ComponentHeader from "@/components/common/header";
import BreadCrumb from "@/components/common/breadcrumb";
import ComponentGrid from "@/components/Myaccount/grid";

const LogsAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader title="Minha conta" subTitle="Logs de acessos" />
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
