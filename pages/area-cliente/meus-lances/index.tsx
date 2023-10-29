import styles from "../styles.module.scss";
import ComponentHeader from "@/components/common/header";
import ComponentGrid from "@/components/Myaccount/grid";
import BreadCrumb from "@/components/common/breadcrumb";

const MyBidsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader title="Minha conta" subTitle="Meus lances" />
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
      <div className={styles.container_data}></div>
    </div>
  );
};
export default MyBidsPage;
