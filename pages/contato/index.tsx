import BreadCrumb from "@/components/Common/BreadCrumb";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import TextArea from "@/components/Common/TextArea";
import Button from "@/components/Common/Button";
import Header from "@/components/Common/Header";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className={styles.container}>
      <BreadCrumb lastText="" />
      <Header title="Contato" />
      <div className={styles.container_form}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="d-flex flex-column mb-3 fw-bold">
            <Label text="Nome *" labelFor="name" />
            <Input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              required={true}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <Label text="E-mail *" labelFor="email" />
            <Input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required={true}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <Label text="Celular *" labelFor="phone" />
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              required={true}
              placeholder="(DDD) + número"
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <Label text="Mensagem *" labelFor="message" />
            <TextArea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              required={true}
              maxLength={400}
              placeholder="Digite sua mensagem"
              className={styles.textarea}
            />
          </div>
          <Button type="submit" text="ENVIAR MENSAGEM" />
        </form>
      </div>{" "}
    </div>
  );
};

export default Contact;
