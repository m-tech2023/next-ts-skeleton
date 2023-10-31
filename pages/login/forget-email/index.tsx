import BreadCrumb from "@/components/Common/BreadCrumb";
import styles from "../styles.module.scss";
import Header from "@/components/Common/Header";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";

const ForgetEmail = () => {
  return (
    <div className={styles.container}>
      <BreadCrumb lastText={styles.lastName} />
      <Header
        title="Recuperar e-mail"
        subTitle="Digite seu celular de cadastro para receber um código de recuperação"
      />
      <div className={styles.container_form}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <Label
              labelFor="telefone"
              text="Celular de cadastro"
              className={styles.label}
            />
            <Input
              required={true}
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Digite seu celular de cadastro"
              className={styles.input}
            />
          </div>
          <div className={styles.container_buttons}>
            <Button text="ENVIAR" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetEmail;
