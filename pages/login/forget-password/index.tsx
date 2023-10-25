import styles from "../styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoginLabel from "@/components/LoginComponents/label";
import LoginInput from "@/components/LoginComponents/input";
import LoginButton from "@/components/LoginComponents/button";

const ForgetPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <p>
          Home <FontAwesomeIcon icon={faAngleRight} /> Login
          <FontAwesomeIcon icon={faAngleRight} /> Esqueci minha senha
        </p>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>Esqueci minha senha</h2>
        <p className={styles.sub_title}>
          Digite o seu e-mail de cadastro para receber um link de recuperação de
          senha, onde será possível alterar a seua senha.
        </p>
      </div>
      <div className={styles.contaienr_form}>
        <form action="" className={styles.form}>
          <div className={styles.form_group}>
            <LoginLabel labelFor="forgetEmail" text="E-mail de cadastro" />
            <LoginInput
              id="forgetEmail"
              name="forgetEmail"
              type="text"
              placeholder="Digite seu e-mail de cadastro"
            />
          </div>
          <p>Não lembra seu e-mail? Clique aqui para recuperar.</p>
          <div className={styles.container_buttons}>
            <LoginButton text="ENVIAR" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
