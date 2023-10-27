import styles from "../../../pages/login/styles.module.scss";
import React from "react";
import LoginLabel from "../label";
import LoginInput from "../input";
import Link from "next/link";
import LoginButton from "../button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginFormPessoaJuridica = () => {
  const loginAcess = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        if (userInfo) {
          const userData = userInfo.data;
          console.log(userData);
        } else {
          console.log("Resposta vazia ou sem dados de usuário.");
        }
      } catch (error) {
        console.error("Erro ao obter informações do usuário:", error);
      }
    },
    onError: (error) => {
      console.error("Erro ao fazer login com o Google:", error);
    },
  });
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
        <LoginButton
          onClick={() => loginAcess()}
          img="/google-icon.png"
          text="ENTRAR COM O GOOGLE"
          className={styles.btn_google}
        />
      </div>
    </form>
  );
};

export default LoginFormPessoaJuridica;
