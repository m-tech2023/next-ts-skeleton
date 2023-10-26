import ComponentHeader from "@/components/Myaccount/header";
import styles from "../styles.module.scss";
import ComponentGrid from "@/components/Myaccount/grid";
import BreadCrumb from "@/components/Myaccount/breadcrumb";

const MyBidsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader title="Minha conta" text="Meus lances" />
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
export default MyBidsPage;
