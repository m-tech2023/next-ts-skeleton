import React, { useState } from "react";
import styles from "./styles.module.scss";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Button from "@/components/Common/Button";

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
      <div className={styles.container_content} style={{ width: "520px" }}>
        <h2
          className="p-4 fw-bold"
          style={{ color: "#37406d", fontFamily: "Roboto Slab, sans-serif" }}
        >
          Contato
        </h2>
        <form className="p-4 ms-2" onSubmit={handleSubmit}>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label
              htmlFor="name"
              style={{ color: "#37406d", fontFamily: "Roboto, sans-serif" }}
            >
              Nome *
            </label>
            <input
              className="w-100 rounded form-control-lg"
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label
              htmlFor="email"
              style={{ color: "#37406d", fontFamily: "Roboto, sans-serif" }}
            >
              E-mail *
            </label>
            <input
              className="w-100 rounded form-control-lg"
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label
              htmlFor="phone"
              style={{ color: "#37406d", fontFamily: "Roboto, sans-serif" }}
            >
              Celular *
            </label>
            <input
              className="w-100 rounded form-control-lg"
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label
              htmlFor="message"
              style={{ color: "#37406d", fontFamily: "Roboto, sans-serif" }}
            >
              Mensagem *
            </label>
            <textarea
              className="w-100 rounded form-control-lg"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              rows={4}
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="btn btn-primary rounded"
            text="ENVIAR MENSAGEM"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
