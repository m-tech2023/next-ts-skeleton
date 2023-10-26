import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import LoginFormPessoaFisica from "@/components/LoginComponents/LoginFormPf";
import LoginFormPessoaEstrangeira from "@/components/LoginComponents/LoginFormEstr";
import LoginFormPessoaJuridica from "@/components/LoginComponents/LoginFormPj";
import LoginButton from "@/components/LoginComponents/button";
import BreadCrumb from "@/components/common/breadcrumb";
import ComponentHeader from "@/components/common/header";

const Login = () => {
  const [selectedForm, setSelectedForm] = useState("pessoaFisica");

  const handleFormSelection = (formType: string) => {
    setSelectedForm(formType);
  };

  const renderForm = () => {
    if (selectedForm === "pessoaFisica") {
      return <LoginFormPessoaFisica />;
    } else if (selectedForm === "estrangeiro") {
      return <LoginFormPessoaEstrangeira />;
    } else if (selectedForm === "pessoaJuridica") {
      return <LoginFormPessoaJuridica />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb
          className={styles.link}
          classNameIcon={styles.icon}
          lastText={styles.lastName}
        />
      </div>
      <div className={styles.header}>
        <ComponentHeader title="Login" classNameTitle={styles.title} />
      </div>
      <div className={styles.container_form}>
        <div className={styles.container_form_selected}>
          <LoginButton
            text="Pessoa Física"
            classNameButton={styles.btn}
            onClick={() => handleFormSelection("pessoaFisica")}
          />
          <LoginButton
            text="Pessoa Jurídica"
            classNameButton={styles.btn}
            onClick={() => handleFormSelection("pessoaJuridica")}
          />
          <LoginButton
            text="Pessoa Estrangeira"
            classNameButton={styles.btn}
            onClick={() => handleFormSelection("estrangeiro")}
          />
        </div>
        {renderForm()}
        <div className={styles.hr} />
        <div className={styles.register}>
          <p>
            Ainda não tem uma conta?{" "}
            <Link href={"/register"} className={styles.link}>
              Cadastra-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
