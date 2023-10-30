import styles from "./styles.module.scss";
import LoginInput from "@/components/LoginComponents/Input";
import LoginLabel from "@/components/LoginComponents/Label";
import ComponentButton from "@/components/Myaccount/Button";

const Messages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_form}>
        <div className={styles.form_group}>
          <LoginLabel labelFor="code" text="Código" />
          <LoginInput
            id="code"
            name="code"
            placeholder=""
            required={true}
            type="text"
          />
        </div>
        <div className={styles.form_group}>
          <LoginLabel labelFor="code" text="Descrição" />
          <LoginInput
            id="code"
            name="code"
            placeholder=""
            required={true}
            type="text"
          />
        </div>
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
    </div>
  );
};
export default Messages;
