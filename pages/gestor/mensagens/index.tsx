import BreadCrumb from "@/components/Common/BreadCrumb";
import styles from "./styles.module.scss";
import GestorForm from "@/components/ManagerComponents/Form";

const Messages = () => {
  return (
    <div className={styles.container}>
      <BreadCrumb lastText={styles.lastName} />
      <GestorForm />
    </div>
  );
};
export default Messages;
