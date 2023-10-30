import React, { useState } from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import Head from "next/head";
import Image from 'next/image'
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const PreRegistration = () => {
  const [formValues, setFormValues] = useState({
    nationality: 'brasileiro',
    registrationType: 'pf',
    name: '',
    cpfOrCnpj: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      setEmailError('Os campos de e-mail e confirmação de e-mail não coincidem');
      return;
    } else {
      setEmailError('');
    }

    if (formValues.password !== formValues.confirmPassword) {
      setPasswordError('Os campos de senha e confirmação de senha não coincidem');
      return;
    } else {
      setPasswordError('');
    }

    if (formValues.password.length < 8 || !/[A-Z]/.test(formValues.password) || !/[0-9]/.test(formValues.password) || !/[!@#$%^&*]/.test(formValues.password)) {
      setPasswordError('A senha deve atender os critérios citados acima.');
      return;
    } else {
      setPasswordError('');
    }
    console.log(formValues);   
  };
  return (
    <>
      <Head>
        <title>Cadastre-se</title>
        <meta name="description" content="Contact page content description" />
      </Head>
      <BreadCrumb />
      <div className="mx-auto" style={{ height: '100vh', width: '380px' }}>
      <h2 className="p-4 fw-bold" style={{ color: '#37406d', fontFamily: 'Roboto Slab, sans-serif' }}>
        Cadastre-se
      </h2>
      <form className="p-4 " onSubmit={handleSubmit}>
        <div className="border m-1 p-4 w-auto rounded shadow">
          <label
            className='mb-2 fw-bold'
            style={{ color: '#000000', fontFamily: 'Roboto, sans-serif' }}>
            Nacionalidade / Nacionality
          </label>
          <div className='d-flex flex-row'>

            <label className='d-flex flex-row me-3'>
              <Image
                src='/icons/brazil.png'
                alt='Brazil flag'
                className='me-1'
                width={20}
                height={20}
              />
              <input
                className='me-1'
                type="radio"
                name="nationality"
                value="brasileiro"
                checked={formValues.nationality === 'brasileiro'}
                onChange={handleInputChange}
              />
              Brasileiro
            </label>
            <label className='d-flex flex-row me-3'>
              <Image
                src='/icons/earth.png'
                alt='Earth image'
                className='me-1'
                width={20}
                height={20}
              />
              <input
                className='me-1'
                type="radio"
                name="nationality"
                value="estrangeiro"
                checked={formValues.nationality === 'estrangeiro'}
                onChange={handleInputChange}
              />
              Estrangeiro
            </label>
          </div>
        </div>

        <div className="border m-1 mt-4 p-4 w-auto rounded shadow">
          <label
            className='fw-bold mb-2'
            style={{ color: '#000000', fontFamily: 'Roboto, sans-serif' }}>
            Tipo de Cadastro
          </label>
          <div className='d-flex flex-row'>
            <label className='d-flex flex-row me-3'>
              <input
                className='me-1'
                type="radio"
                name="registrationType"
                value="pf"
                checked={formValues.registrationType === 'pf'}
                onChange={handleInputChange}
              />
              Pessoa Física
            </label>
            <label className='d-flex flex-row me-3'>
              <input
                className='me-1'
                type="radio"
                name="registrationType"
                value="pj"
                checked={formValues.registrationType === 'pj'}
                onChange={handleInputChange}
              />
              Pessoa Jurídica
            </label>
          </div>
        </div>

        <div className="d-flex mt-4 flex-column mb-3">
          <label htmlFor="googleSignup" style={{ color: '#000000', fontFamily: 'Roboto, sans-serif' }}>
            Cadastre-se com o Google
          </label>
          <button type='button' onClick={() => handleGoogleRegister()} className="border m-1 p-2 shadow-sm w-2 rounded" style={{ backgroundColor: '#FFFFFF' }}>
            <Image
              src='/icons/google.png'
              alt='Brazil flag'
              className='me-3'
              width={50}
              height={50}
            />
            CADASTRE-SE COM O GOOGLE
          </button>
        </div>
        <div className="d-flex flex-column mb-3">
          <label style={{ color: '#000000', fontFamily: 'Roboto, sans-serif' }}>
            Ou preencha o formulário abaixo para se cadastrar
          </label>
        </div>
        <div className="d-flex flex-column mb-3 fw-bold">
          <label htmlFor="name" style={{ color: '#37406d', fontFamily: 'Roboto, sans-serif' }}>
            Nome completo
          </label>
          <input
            className="w-auto rounded form-control-lg"
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-flex flex-column mb-3 fw-bold">
          <label htmlFor="cpfOrCnpj" style={{ color: '#37406d', fontFamily: 'Roboto, sans-serif' }}>
            {formValues.registrationType === 'pf' ? 'CPF' : 'CNPJ'}
          </label>
          <input
            className="w-auto rounded form-control-lg"
            type={formValues.registrationType === 'pf' ? 'text' : 'text'}
            id="cpfOrCnpj"
            name="cpfOrCnpj"
            value={formValues.cpfOrCnpj}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-flex flex-column mb-3 fw-bold">
          <label htmlFor="email" style={{ color: '#37406d', fontFamily: 'Roboto, sans-serif' }}>
            E-mail
          </label>
          <input
            className="w-auto rounded form-control-lg"
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-flex flex-column mb-3 fw-bold">
          <label htmlFor="confirmEmail" style={{ color: '#37406d', fontFamily: 'Roboto, sans-serif' }}>
            Confirme seu  e-mail
          </label>
          <input
            className="w-auto rounded form-control-lg"
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formValues.confirmEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        <div className="d-flex flex-column mb-3 fw-bold">
          <label htmlFor="password" style={{ color: '#37406d', fontFamily: 'Roboto, sans-serif' }}>
            Senha
          </label>
          <input
            className="w-auto rounded form-control-lg"
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-flex flex-column mb-3">
          <ul>
            <li style={{ color: formValues.password.length >= 8 ? 'green' : 'black' }}>Mínimo de 8 caracteres</li>
            <li style={{ color: /[A-Z]/.test(formValues.password) ? 'green' : 'black' }}>Mínimo de 1 caractere maiúsculo</li>
            <li style={{ color: /\d/.test(formValues.password) ? 'green' : 'black' }}>Mínimo de 1 número</li>
            <li style={{ color: /[@#$&>.%]/.test(formValues.password) ? 'green' : 'black' }}>
              {`Mínimo de 1 caractere especial (Ex: @#$&>.%)`}
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column mb-3 fw-bold">
          <label htmlFor="confirmPassword" style={{ color: '#37406d', fontFamily: 'Roboto, sans-serif' }}>
            Confirme sua  senha
          </label>
          <input
            className="w-auto rounded form-control-lg"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
        <button
          type="submit"
          className="btn btn-primary rounded"
          style={{ backgroundColor: '#02a2e9', width: '100%' }}
        >
          CADASTRAR
        </button>
      </form>
    </div>
    </>
  );
}

export default PreRegistration;
