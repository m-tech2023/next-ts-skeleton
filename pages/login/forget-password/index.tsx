import BreadCrumb from "@/components/Common/BreadCrumb";
import Header from "@/components/Common/Header";
import LoginButton from "@/components/LoginComponents/Button";
import LoginInput from "@/components/LoginComponents/Input";
import LoginLabel from "@/components/LoginComponents/Label";
import Link from "next/link";
import styles from "../styles.module.scss";

const ForgetPassword = () => {
  return (
    <div className={styles.container}>
      <BreadCrumb lastText={styles.lastName} />
      <div className={styles.container_title}>
        <Header
          title="Esqueci minha senha"
          subTitle=" Digite o seu e-mail de cadastro para receber um link de recuperação de
          senha, onde será possível alterar a sua senha."
        />
      </div>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <LoginLabel
              labelFor="email"
              text="E-mail de cadastro"
              className={styles.label}
            />
            <LoginInput
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
              <Link href={"/login/forget-email"} className={styles.link}>
                Clique aqui para recuperar.
              </Link>
            </p>
          </div>
          <div className={styles.container_buttons}>
            <LoginButton text="ENVIAR" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
