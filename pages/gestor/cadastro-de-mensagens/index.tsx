import BreadCrumb from "@/components/Common/BreadCrumb";
import styles from "./styles.module.scss";
import GestorForm from "@/components/Manager/index";
import Header from "@/components/Common/Header";

const CadastroDeMensagens = () => {
  return (
    <div className={styles.container}>
      <BreadCrumb />
      <div className={styles.container_header}>
        <Header title="Controle de Mensagens" />
      </div>
      <GestorForm />
    </div>
  );
};
export default CadastroDeMensagens;
