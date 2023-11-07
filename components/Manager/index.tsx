import Label from "@/components/Common/Label";
import styles from "@/pages/gestor/cadastro-de-mensagens/styles.module.scss";
import React, { useState } from "react";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import TextArea from "../Common/TextArea";

const GestorForm = () => {
  const [selectedButtons, setSelectedButtons] = useState({
    WhatsApp: false,
    Email: false,
  });
  const [selectedButtonsLote, setSelectedButtonsLote] = useState({
    Prelance: false,
    Leilao: false,
    Outros: false,
  });

  const handleButtonClick = (buttonName) => {
    if (buttonName === "Ambos") {
      setSelectedButtons((prevSelected) => ({
        WhatsApp: !prevSelected.WhatsApp,
        Email: !prevSelected.Email,
      }));
    } else {
      setSelectedButtons((prevSelected) => ({
        ...prevSelected,
        [buttonName]: !prevSelected[buttonName],
      }));
      setSelectedButtonsLote((prevSelectedLote) => ({
        ...prevSelectedLote,
        [buttonName]: !prevSelectedLote[buttonName],
      }));
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.form_group}>
        <Label labelFor="code" text="Código" className={styles.label} />
        <Input
          id="code"
          name="code"
          placeholder=""
          required={true}
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.form_group_text_area}>
        <Label
          labelFor="desc"
          text="Descrição"
          className={`${styles.label} pt-2`}
        />
        <TextArea
          id="desc"
          name="desc"
          placeholder="Digite a descrição do lote"
          required={true}
          className={styles.textarea}
          maxLength={400}
        />
      </div>
      <div className={styles.container_buttons}>
        <div className={styles.buttons}>
          <div
            className={`${styles.btn} ${
              selectedButtons.WhatsApp ? styles.active : ""
            }`}
          >
            <label htmlFor="whatsapp">
              <input
                type="checkbox"
                id="whatsapp"
                name="whatsapp"
                checked={selectedButtons.WhatsApp}
                onChange={() => handleButtonClick("WhatsApp")}
              />
              WhatsApp
            </label>
          </div>
          <div
            className={`${styles.btn} ${
              selectedButtons.Email ? styles.active : ""
            }`}
          >
            <label htmlFor="email">
              <input
                type="checkbox"
                id="email"
                name="email"
                checked={selectedButtons.Email}
                onChange={() => handleButtonClick("Email")}
              />
              E-mail
            </label>
          </div>
          <div className={styles.btn}>
            <label htmlFor="ambos">
              <input
                type="checkbox"
                id="ambos"
                name="ambos"
                checked={selectedButtons.WhatsApp && selectedButtons.Email}
                onChange={() => handleButtonClick("Ambos")}
              />
              Ambos
            </label>
          </div>
        </div>
        <div className={styles.buttons}>
          <div
            className={`${styles.btn} ${
              selectedButtonsLote.Prelance ? styles.active : ""
            }`}
          >
            <label htmlFor="prelance">
              <input
                type="checkbox"
                id="prelance"
                name="prelance"
                checked={selectedButtonsLote.Prelance}
                onChange={() => handleButtonClick("Prelance")}
              />
              Pré-Lance
            </label>
          </div>
          <div
            className={`${styles.btn} ${
              selectedButtonsLote.Leilao ? styles.active : ""
            }`}
          >
            <label htmlFor="leilao">
              <input
                type="checkbox"
                id="leilao"
                name="leilao"
                checked={selectedButtonsLote.Leilao}
                onChange={() => handleButtonClick("Leilao")}
              />
              Leilão
            </label>
          </div>
          <div
            className={`${styles.btn} ${
              selectedButtonsLote.Outros ? styles.active : ""
            }`}
          >
            <label htmlFor="outros">
              <input
                type="checkbox"
                id="outros"
                name="outros"
                checked={selectedButtonsLote.Outros}
                onChange={() => handleButtonClick("Outros")}
              />
              Outros
            </label>
          </div>
        </div>
      </div>
      <Button text="ENVIAR" type="submit" className={styles.btn_submit} />
    </form>
  );
};
export default GestorForm;
