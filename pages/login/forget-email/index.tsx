import BreadCrumb from "@/components/Common/BreadCrumb";
import LoginButton from "@/components/LoginComponents/Button";
import LoginInput from "@/components/LoginComponents/Input";
import LoginLabel from "@/components/LoginComponents/Label";
import styles from "../styles.module.scss";

const ForgetEmail = () => {
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
        <Header
          title="Recuperar e-mail"
          subTitle="Digite seu celular de cadastro para receber um código de recuperação"
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
        />
      </div>
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <LoginLabel
              labelFor="telefone"
              text="Celular de cadastro"
              className={styles.label}
            />
            <LoginInput
              required={true}
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Digite seu celular de cadastro"
              className={styles.input}
            />
          </div>
          <div className={styles.container_buttons}>
            <LoginButton text="ENVIAR" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetEmail;
