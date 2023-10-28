import styles from "../../../pages/login/styles.module.scss";
import React from "react";
import LoginLabel from "../label";
import LoginInput from "../input";
import Link from "next/link";
import LoginButton from "../button";

const LoginFormPessoaJuridica = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_group}>
        <LoginLabel
          labelFor="email"
          text="E-mail ou CNPJ"
          className={styles.label}
        />
        <LoginInput
          required={true}
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
          required={true}
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
        <LoginButton text="ENTRAR" className={styles.btn} type="submit" />
      </div>
    </form>
  );
};

export default LoginFormPessoaJuridica;
