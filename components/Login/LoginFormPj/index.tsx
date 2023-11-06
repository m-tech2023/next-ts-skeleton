import styles from "../../../pages/login/styles.module.scss";
import React, { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";

const LoginFormPessoaJuridica = () => {
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

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.form_group}>
        <Label
          labelFor="email"
          text="E-mail ou CNPJ"
          className={styles.label}
        />
        <Input
          required={true}
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu e-mail ou CNPJ"
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
      </div>
    </form>
  );
};

export default LoginFormPessoaJuridica;
