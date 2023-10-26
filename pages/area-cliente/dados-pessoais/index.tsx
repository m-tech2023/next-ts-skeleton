import ComponentHeader from "@/components/Myaccount/header";
import styles from "../styles.module.scss";
import ComponentGrid from "@/components/Myaccount/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FormPersonalData from "@/components/Myaccount/formPersonalData";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <ComponentHeader title="Minha conta" text="Dados pessoais" />
      </div>
      <div className={styles.container_breadcrumb}>
        <p>Home</p>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        <span>Minha conta</span>
      </div>
      <div className={styles.container_grid}>
        <ComponentGrid />
      </div>
      <div className={styles.container_data}>
        <FormPersonalData />
      </div>
    </div>
  );
};
export default index;
