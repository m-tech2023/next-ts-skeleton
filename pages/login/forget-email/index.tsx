import styles from "../styles.module.scss";
import LoginLabel from "@/components/LoginComponents/label";
import LoginInput from "@/components/LoginComponents/input";
import LoginButton from "@/components/LoginComponents/button";
import BreadCrumb from "@/components/common/breadcrumb";
import ComponentHeader from "@/components/common/header";

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
      <div className={styles.header}>
        <ComponentHeader
          title="Recuperar e-mail"
          subTitle="..."
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
