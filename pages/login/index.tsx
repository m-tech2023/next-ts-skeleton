import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import LoginFormPessoaEstrangeira from "@/components/LoginComponents/LoginFormEstr";
import LoginFormPessoaFisica from "@/components/LoginComponents/LoginFormPf";
import LoginFormPessoaJuridica from "@/components/LoginComponents/LoginFormPj";
import LoginButton from "@/components/LoginComponents/Button";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

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
      <BreadCrumb lastText={styles.lastName} />
      <Header title="Login" />
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
            text="Estrangeiro"
            classNameButton={styles.btn}
            onClick={() => handleFormSelection("estrangeiro")}
          />
        </div>
        <div className={styles.container_form_selected_mobile}>
          <select
            onChange={(e) => handleFormSelection(e.target.value)}
            className={styles.select}
          >
            <option value="pessoaFisica">Pessoa Física</option>
            <option value="pessoaJuridica">Pessoa Jurídica</option>
            <option value="estrangeiro">Pessoa Estrangeira</option>
          </select>
        </div>
        {renderForm()}
        <div className={styles.hr} />
        <div className={styles.register}>
          <p>
            Ainda não tem uma conta?{" "}
            <Link href={"/register"} className={styles.link}>
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
