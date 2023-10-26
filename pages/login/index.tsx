import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoginFormPessoaFisica from "@/components/LoginComponents/LoginFormPf";
import LoginFormPessoaEstrangeira from "@/components/LoginComponents/LoginFormEstr";
import LoginFormPessoaJuridica from "@/components/LoginComponents/LoginFormPj";
import LoginButton from "@/components/LoginComponents/button";

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
      <div className={styles.breadcrumb}>
        <p>Home</p>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        <span>Login</span>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>Login</h2>
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
