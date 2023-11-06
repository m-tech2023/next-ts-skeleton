import styles from "../../../pages/login/styles.module.scss";
import React, { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import ButtonGoogle from "../ButtonGoogle";
import Button from "@/components/Common/Button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginFormPessoaFisica = () => {
  const router = useRouter();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fakeLoginSuccessful = true;

    if (fakeLoginSuccessful) {
      router.push("/area-cliente/dados-pessoais");
    } else {
      alert("Login falhou. Verifique suas credenciais.");
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
          router.push("/area-cliente/dados-pessoais");
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
    <form className={styles.form} onSubmit={handleFormSubmit}>
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
        <Link href={"/login/forget-password"} className={styles.link}>
          <p>Esqueci minha senha</p>
        </Link>
      </div>
      <div className={styles.container_buttons}>
        <Button text="ENTRAR" className={styles.btn} type="submit" />
        <ButtonGoogle
          img="/google-icon.png"
          text="ENTRAR COM GOOGLE"
          onClick={() => loginAcess()}
          className={styles.btn_google}
        />
      </div>
    </form>
  );
};

export default LoginFormPessoaFisica;
