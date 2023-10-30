import styles from "../../../pages/gestor/cadastro-de-mensagens/styles.module.scss";
import LoginInput from "@/components/LoginComponents/Input";
import LoginLabel from "@/components/LoginComponents/Label";
import ComponentButton from "@/components/Myaccount/Button";
import ManagerTextArea from "../TextArea";
import LoginButton from "@/components/LoginComponents/Button";
import React, { useState } from "react";

const GestorForm = () => {
  const [checkbox, setCheckbox] = useState({
    whatsapp: false,
    email: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckbox({ ...checkbox, [name]: checked });
  };

  return (
    <form className={styles.form}>
      <div className={styles.form_group}>
        <LoginLabel labelFor="code" text="Código" className={styles.label} />
        <LoginInput
          id="code"
          name="code"
          placeholder=""
          required={true}
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.form_group_text_area}>
        <LoginLabel labelFor="code" text="Descrição" className={styles.label} />
        <ManagerTextArea
          id="code"
          name="code"
          placeholder="Digite a descrição do lote"
          required={true}
          className={styles.textarea}
          maxLength={400}
        />
      </div>
      <div className={styles.container_buttons}>
        <div className={styles.buttons}>
          <ComponentButton
            text="Whatsapp"
            className={styles.btn}
            type="button"
          />
          <ComponentButton text="E-mail" className={styles.btn} type="button" />
          <ComponentButton text="Ambos" className={styles.btn} type="button" />
        </div>
        <div className={styles.buttons}>
          <ComponentButton
            text="Pré lance"
            className={styles.btn}
            type="button"
          />
          <ComponentButton text="Leilão" className={styles.btn} type="button" />
          <ComponentButton text="Outros" className={styles.btn} type="button" />
        </div>
      </div>
      <LoginButton
        text="ENVIAR"
        type="submit"
        classNameButton={styles.btn_submit}
      />
    </form>
  );
};
export default GestorForm;
