import styles from "../../../pages/login/styles.module.scss";
import React, { FormEvent } from "react";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import authService from "@/services/auth/auth.service";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SET_USER_TOKEN } from "@/store/user/action-types";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import ButtonGoogle from "../../Common/ButtonGoogle";
import Button from "@/components/Common/Button";

const LoginFormPessoaFisica = () => {
  const router = useRouter();
  const dispatch = useDispatch();

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
        dispatch({
          type: SET_USER_TOKEN,
          payload: sessionStorage.getItem("opportunity-token"),
        });
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
          router.push("/area-cliente/dados-pessoais");
          dispatch({
            type: SET_USER_TOKEN,
            payload: userData,
          });
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
        <Label
          labelFor="username"
          text="E-mail ou CPF"
          className={styles.label}
        />
        <Input
          required={true}
          type="text"
          id="username"
          name="username"
          placeholder="Digite seu e-mail ou CPF"
          className={styles.input}
        />
      </div>
      <div className={styles.form_group}>
        <Label labelFor="password" text="Senha" className={styles.label} />
        <Input
          required={true}
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          className={styles.input}
        />
      </div>
      <div className={styles.forget_password}>
        <Link href={"/login/esqueci-minha-senha"} className={styles.link}>
          <p>Esqueci minha senha</p>
        </Link>
      </div>
      <div className={styles.container_buttons}>
        <Button text="ENTRAR" className={styles.btn} type="submit" />
        <ButtonGoogle
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
