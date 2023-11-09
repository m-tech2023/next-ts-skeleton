import styles from "./styles.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Header from "@/components/Common/Header";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Button from "@/components/Common/Button";
import ButtonGoogle from "@/components/Login/ButtonGoogle";

const PreRegistration = () => {
  const [formValues, setFormValues] = useState({
    nationality: "brasileiro",
    registrationType: "pf",
    name: "",
    cpfOrCnpj: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleGoogleRegister = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        if (userInfo) {
          const userData = userInfo.data;
          console.log("Dados do usuário do Google:", userData);
          setFormValues({
            ...formValues,
            name: userData.name,
            email: userData.email,
            confirmEmail: userData.email,
          });
        } else {
          console.log("Resposta vazia ou sem dados de usuário.");
        }
      } catch (error) {
        console.error("Erro ao obter informações do usuário:", error);
      }
    },
    onError: (error) => {
      console.error("Erro ao fazer cadastro com o Google:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValues.email !== formValues.confirmEmail) {
      setEmailError(
        "Os campos de e-mail e confirmação de e-mail não coincidem"
      );
      return;
    } else {
      setEmailError("");
    }

    if (formValues.password !== formValues.confirmPassword) {
      setPasswordError(
        "Os campos de senha e confirmação de senha não coincidem"
      );
      return;
    } else {
      setPasswordError("");
    }

    if (
      formValues.password.length < 8 ||
      !/[A-Z]/.test(formValues.password) ||
      !/[0-9]/.test(formValues.password) ||
      !/[!@#$%^&*]/.test(formValues.password)
    ) {
      setPasswordError("A senha deve atender os critérios citados acima.");
      return;
    } else {
      setPasswordError("");
    }
    console.log(formValues);
  };
  return (
    <div className={styles.container}>
      <BreadCrumb />
      <Header title="Cadastre-se" />
      <div className={styles.container_form}>
        <form onSubmit={handleSubmit}>
          <div className="border m-1 p-4 w-auto rounded shadow">
            <label
              className="mb-2 fw-bold"
              style={{ color: "#000000", fontFamily: "Roboto, sans-serif" }}
            >
              Nacionalidade / Nacionality
            </label>
            <div className="d-flex flex-row">
              <label className="d-flex flex-row me-3">
                <Image
                  src="/icons/brazil.png"
                  alt="Brazil flag"
                  className="me-1"
                  width={22}
                  height={22}
                />
                <input
                  className="me-1"
                  type="radio"
                  name="nationality"
                  value="brasileiro"
                  checked={formValues.nationality === "brasileiro"}
                  onChange={handleInputChange}
                />
                Brasileiro
              </label>
              <label className="d-flex flex-row me-3">
                <Image
                  src="/icons/earth.png"
                  alt="Earth image"
                  className="me-1"
                  width={22}
                  height={22}
                />
                <input
                  className="me-1"
                  type="radio"
                  name="nationality"
                  value="estrangeiro"
                  checked={formValues.nationality === "estrangeiro"}
                  onChange={handleInputChange}
                />
                Estrangeiro
              </label>
            </div>
          </div>

          <div className="border m-1 mt-4 p-4 w-auto rounded shadow">
            <label
              className="fw-bold mb-2"
              style={{ color: "#000000", fontFamily: "Roboto, sans-serif" }}
            >
              Tipo de Cadastro
            </label>
            <div className="d-flex flex-row">
              <label className="d-flex flex-row me-3">
                <input
                  className="me-1"
                  type="radio"
                  name="registrationType"
                  value="pf"
                  checked={formValues.registrationType === "pf"}
                  onChange={handleInputChange}
                />
                Pessoa Física
              </label>
              <label className="d-flex flex-row me-3">
                <input
                  className="me-1"
                  type="radio"
                  name="registrationType"
                  value="pj"
                  checked={formValues.registrationType === "pj"}
                  onChange={handleInputChange}
                />
                Pessoa Jurídica
              </label>
            </div>
          </div>

          <div className="d-flex mt-4 flex-column mb-3">
            <label
              htmlFor="googleSignup"
              style={{ color: "#000000", fontFamily: "Roboto, sans-serif" }}
            >
              Cadastre-se com o Google
            </label>
            <ButtonGoogle
              onClick={() => handleGoogleRegister()}
              img="/google-icon.png"
              text="ENTRAR COM GOOGLE"
              className={`${styles.btn_google} mt-3`}
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <label
              style={{ color: "#000000", fontFamily: "Roboto, sans-serif" }}
            >
              Ou preencha o formulário abaixo para se cadastrar
            </label>
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label htmlFor="name" className={styles.label}>
              Nome completo
            </label>
            <input
              className={`${styles.input} w-auto rounded form-control-lg`}
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              placeholder="Digite seu nome completo"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label htmlFor="cpfOrCnpj" className={styles.label}>
              {formValues.registrationType === "pf" ? "CPF" : "CNPJ"}
            </label>
            <input
              className={`${styles.input} w-auto rounded form-control-lg`}
              type={formValues.registrationType === "pf" ? "text" : "text"}
              id="cpfOrCnpj"
              name="cpfOrCnpj"
              value={formValues.cpfOrCnpj}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input
              className={`${styles.input} w-auto rounded form-control-lg`}
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              placeholder="Digite seu e-mail"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label htmlFor="confirmEmail" className={styles.label}>
              Confirme seu e-mail
            </label>
            <input
              className={`${styles.input} w-auto rounded form-control-lg`}
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={formValues.confirmEmail}
              placeholder="Confirme seu e-mail"
              onChange={handleInputChange}
              required
            />
          </div>
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}
          <div className="d-flex flex-column mb-3 fw-bold">
            <label htmlFor="password" className={styles.label}>
              Senha
            </label>
            <input
              className={`${styles.input} w-auto rounded form-control-lg`}
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              placeholder="Digite sua senha"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={`${styles.container_rules_password} mb-3`}>
            <ul>
              <li
                style={{
                  color: formValues.password.length >= 8 ? "green" : "black",
                }}
              >
                Mínimo de 8 caracteres
              </li>
              <li
                style={{
                  color: /[A-Z]/.test(formValues.password) ? "green" : "black",
                }}
              >
                Mínimo de 1 caractere maiúsculo
              </li>
              <li
                style={{
                  color: /\d/.test(formValues.password) ? "green" : "black",
                }}
              >
                Mínimo de 1 número
              </li>
              <li
                style={{
                  color: /[@#$&>.%!]/.test(formValues.password)
                    ? "green"
                    : "black",
                }}
              >
                {`Mínimo de 1 caractere especial (Ex: @#$&>.%)`}
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column mb-3 fw-bold">
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirme sua senha
            </label>
            <input
              className={`${styles.input} w-auto rounded form-control-lg`}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              placeholder="Confirme sua senha"
              onChange={handleInputChange}
              required
            />
          </div>
          {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
          <Button
            text="CADASTRAR"
            type="submit"
            className="btn btn-primary rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default PreRegistration;
