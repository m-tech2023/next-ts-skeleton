import styles from "../styles.module.scss";
import LoginInput from "../input";
import LoginLabel from "../label";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_group}>
        <LoginLabel labelFor="email" text="E-mail ou CNPJ" />
        <LoginInput
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu e-mail ou CNPJ"
        />
      </div>
      <div className={styles.form_group}>
        <LoginLabel labelFor="password" text="Senha" />
        <LoginInput
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
        />
      </div>
      <div className={styles.forget_password}>
        <p>Esqueci minha senha</p>
      </div>
      <div className={styles.container_buttons}>
        <button className={styles.btn}>ENTRAR</button>
        <button className={styles.btn_google}>
          <img
            src="/google-icon.png"
            alt="google icone"
            className={styles.icon_google}
          />
          ENTRAR COM O GOOGLE
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
