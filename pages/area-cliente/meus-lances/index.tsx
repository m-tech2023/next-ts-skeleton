import BreadCrumb from "@/components/Common/BreadCrumb";
import ComponentGrid from "@/components/Myaccount/Grid";
import styles from "../styles.module.scss";
import Header from "@/components/Common/Header";

const MyBidsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header title="Minha conta" subTitle="Meus lances" />
      </div>
      <BreadCrumb lastText={styles.lastName} />
      <ComponentGrid />
      <div className={styles.container_data}></div>
    </div>
  );
};
export default MyBidsPage;
