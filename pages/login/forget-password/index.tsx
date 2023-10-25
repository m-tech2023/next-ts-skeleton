import styles from "../styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoginLabel from "@/components/LoginComponents/label";
import LoginInput from "@/components/LoginComponents/input";
import LoginButton from "@/components/LoginComponents/button";
import LoginForm from "@/components/LoginComponents/form";

const ForgetPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <p>Home</p>
        <FontAwesomeIcon icon={faAngleRight} />
        <p>Login</p>
        <FontAwesomeIcon icon={faAngleRight} />
        <p>Esqueceu a senha</p>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>Esqueci minha senha</h2>
        <p className={styles.sub_title}>
          Digite o seu e-mail de cadastro para receber um link de recuperação de
          senha, onde será possível alterar a seua senha.
        </p>
      </div>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <LoginLabel
              labelFor="email"
              text="E-mail de cadastro"
              className={styles.label}
            />
            <LoginInput
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu e-mail de cadastro"
              className={styles.input}
            />
          </div>
          <p>Não lembra seu e-mail? Clique aqui para recuperar.</p>
          <div className={styles.container_buttons}>
            <LoginButton text="ENVIAR" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
