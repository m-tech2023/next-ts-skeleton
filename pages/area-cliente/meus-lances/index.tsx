import ComponentGrid from "@/components/Myaccount/grid";
import BreadCrumb from "@/components/common/BreadCrumb";
import ComponentHeader from "@/components/common/Header";
import styles from "../styles.module.scss";

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
