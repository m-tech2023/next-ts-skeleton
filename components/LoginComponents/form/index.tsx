import Link from "next/link";
import styles from "../../../pages/login/styles.module.scss";
import LoginButton from "../button";
import LoginInput from "../input";
import LoginLabel from "../label";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_group}>
        <LoginLabel
          labelFor="email"
          text="E-mail ou CNPJ"
          className={styles.label}
        />
        <LoginInput
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu e-mail ou CNPJ"
          className={styles.input}
        />
      </div>
      <div className={styles.form_group}>
        <LoginLabel labelFor="password" text="Senha" className={styles.label} />
        <LoginInput
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          className={styles.input}
        />
      </div>
      <div className={styles.forget_password}>
        <Link href={"/login/forget-password"} className={styles.link}>
          <p>Esqueci minha senha</p>
        </Link>
      </div>
      <div className={styles.container_buttons}>
        <LoginButton text="ENTRAR" className={styles.btn} />
        <LoginButton
          img="/google-icon.png"
          text="ENTRAR COM GOOGLE"
          className={styles.btn_google}
          alt="google icon"
        />
      </div>
    </form>
  );
};
export default LoginForm;
