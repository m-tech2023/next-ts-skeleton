import ComponentHeader from "@/components/Myaccount/header";
import styles from "../styles.module.scss";
import ComponentGrid from "@/components/Myaccount/grid";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader text="Dados pessoais" />
      </div>
      <div className={styles.container_breadcrumb}></div>
      <div className={styles.container_grid}>
        <ComponentGrid />
      </div>
      <div className={styles.container_data}></div>
    </div>
  );
};
export default index;
