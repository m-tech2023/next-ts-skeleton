import styles from "../styles.module.scss";
import LoginLabel from "@/components/LoginComponents/label";
import LoginInput from "@/components/LoginComponents/input";
import LoginButton from "@/components/LoginComponents/button";
import Link from "next/link";
import BreadCrumb from "@/components/common/breadcrumb";
import ComponentHeader from "@/components/common/header";

const ForgetPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_breadcrumb}>
        <BreadCrumb
          className={styles.link}
          classNameIcon={styles.icon}
          lastText={styles.lastName}
        />
      </div>
      <div className={styles.container_header}>
        <ComponentHeader
          title="Esqueci minha senha"
          subTitle=" Digite o seu e-mail de cadastro para receber um link de recuperação de
          senha, onde será possível alterar a sua senha."
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
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
