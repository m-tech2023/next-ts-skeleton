import styles from "../../../pages/login/styles.module.scss";
import React, { FormEvent } from "react";
import LoginLabel from "../Label";
import LoginInput from "../Input";
import Link from "next/link";
import LoginButton from "../Button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import authService from "@/services/auth/auth.service";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginFormPessoaFisica = () => {
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")!.toString();
    const password = formData.get("password")!.toString();

    const attributes = { username, password };

    try {
      const { status } = await authService.login(attributes);
      if (status === 200 || status === 201) {
        console.log("logado");
        router.push("/area-cliente/dados-pessoais");
      } else {
        console.log("Algo deu errado no servidor. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao efetuar o login:", error);

      if (error.response) {
        console.log(`Status de erro: ${error.response.status}`);
        console.log(`Mensagem de erro: ${error.response.data.message}`);
      } else if (error.message) {
        console.log(`Erro: ${error.message}`);
      } else {
        console.log(
          "Erro desconhecido. Verifique sua conexão e tente novamente."
        );
      }
    }
  };
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
    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.form_group}>
        <LoginLabel
          labelFor="username"
          text="E-mail ou CPF"
          className={styles.label}
        />
        <LoginInput
          required={true}
          type="text"
          id="username"
          name="username"
          placeholder="Digite seu e-mail ou CPF"
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
          text="ENTRAR COM GOOGLE"
          className={styles.btn_google}
        />
      </div>
    </form>
  );
};

export default LoginFormPessoaFisica;
