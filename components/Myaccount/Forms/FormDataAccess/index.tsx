import Label from "@/components/Common/Label";
import styles from "../FormDataProperties/styles.module.scss";
import React, { FormEvent } from "react";
import Input from "@/components/Common/Input";
import Link from "next/link";
import Button from "@/components/Common/Button";

const FormDataAccess = () => {
  const handleFake = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handleFake}>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="email"
            text="E-mail utilizado no login"
            className={styles.label}
          />
          <Input
            type="text"
            id="email"
            name="email"
            placeholder=""
            value="fazendaturae@gmail.com"
            className={styles.input}
          />
          <Link className={styles.link} href={"/"}>
            Alterar e-mail
          </Link>
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="password" text="Senha" className={styles.label} />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            className={styles.input}
          />
          <Link className={styles.link} href={"/"}>
            Alterar minha senha
          </Link>
        </div>
      </div>
      <Button text="SALVAR" type="submit" />
    </form>
  );
};

export default FormDataAccess;
