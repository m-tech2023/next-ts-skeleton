import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import Link from "next/link";
import styles from "../styles.module.scss";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";

const ForgetPassword = () => {
  return (
    <div className={styles.container}>
      <BreadCrumb lastText={styles.lastName} />
      <div className={styles.container_header}>
        <Header
          title="Esqueci minha senha"
          subTitle=" Digite o seu e-mail de cadastro para receber um link de recuperação de
          senha, onde será possível alterar a sua senha."
        />
      </div>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <Label
              labelFor="email"
              text="E-mail de cadastro"
              className={styles.label}
            />
            <Input
              required={true}
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu e-mail de cadastro"
              className={styles.input}
            />
          </div>
          <div className={styles.forget_email}>
            <p>
              Não lembra seu e-mail?{" "}
              <Link href={"/login/esqueci-o-email"} className={styles.link}>
                Clique aqui para recuperar.
              </Link>
            </p>
          </div>
          <div className={styles.container_buttons}>
            <Button text="ENVIAR" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
