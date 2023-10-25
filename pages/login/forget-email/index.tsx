import styles from "../styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoginLabel from "@/components/LoginComponents/label";
import LoginInput from "@/components/LoginComponents/input";
import LoginButton from "@/components/LoginComponents/button";

const ForgetEmail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <p>Home</p>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        <p>Login</p>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        <span>Recuperar e-mail</span>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>Recuperar e-mail</h2>
        <p className={styles.sub_title}>...</p>
      </div>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <LoginLabel
              labelFor="telefone"
              text="Celular de cadastro"
              className={styles.label}
            />
            <LoginInput
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Digite seu celular de cadastro"
              className={styles.input}
            />
          </div>
          <div className={styles.container_buttons}>
            <LoginButton text="ENVIAR" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetEmail;
