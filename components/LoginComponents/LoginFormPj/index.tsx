import styles from "../../../pages/login/styles.module.scss";
import React from "react";
import LoginLabel from "../label";
import LoginInput from "../input";
import Link from "next/link";
import LoginButton from "../button";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const LoginFormPessoaJuridica = () => {
  return (
    <GoogleOAuthProvider clientId="1091851264293-rjetgf1fetcv18aes1d9g2cu7ir1am53.apps.googleusercontent.com">
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
          <LoginLabel
            labelFor="password"
            text="Senha"
            className={styles.label}
          />
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
          <LoginButton text="ENTRAR" className={styles.btn} type="submit" />
          <GoogleLogin
            width={450}
            locale="pt-br"
            size="large"
            onSuccess={(credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </form>
    </GoogleOAuthProvider>
  );
};

export default LoginFormPessoaJuridica;
