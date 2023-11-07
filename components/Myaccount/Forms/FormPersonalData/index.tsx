import styles from "../FormDataProperties/styles.module.scss";
import Title from "../../../Common/Title";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/types/user";
import userService, { UserUpdate } from "@/services/user/user.service";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_USER_DETAILS } from "@/store/user/action-types";
import Select, {
  estadoCivilOptions,
  nacionalityOptions,
} from "../../Selects/InputSelect";
import { useRouter } from "next/router";

const FormPersonalData = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userDetails = useSelector((state: RootState) => state.user.userDetails);
  const [attributes, setAttributes] = useState<UserUpdate>({
    registrationData: {
      fullName: "",
      document: {
        cpf: "",
        rg: "",
        cnpj: "",
        passport: "",
        ie: "",
      },
      nationality: "",
      maritalStatus: "",
      motherName: "",
      fatherName: "",
      occupation: "",
      company: "",
      companyWebsite: "",
    },
    contactDetails: {
      email: "",
      telephone: "",
      cellPhone: "",
    },
    address: {
      zipCode: "",
      address: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  console.log(attributes);

  useEffect(() => {
    const handleInfo = async () => {
      try {
        const res = await userService.myaccountShow();
        dispatch({
          type: SET_USER_DETAILS,
          payload: res.data,
        });
        console.log("Ação de detalhes do usuário despachada com sucesso!");
      } catch (error) {
        console.log(error);
      }
    };

    if (!userDetails) {
      handleInfo();
    } else {
      setAttributes(userDetails);
    }
  }, [userDetails]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await userService.myaccountPut(attributes);
      setTimeout(() => {
        router.reload();
      }, 2000);
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, fieldName] = name.split(".");

    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [section]: {
        ...prevAttributes[section],
        [fieldName]: value,
      },
    }));
  };
  const handleChangeDoc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      registrationData: {
        ...prevAttributes.registrationData,
        document: {
          ...prevAttributes.registrationData.document,
          [name]: value,
        },
      },
      [name]: value,
    }));
  };
  const handleSelectChange = (field: string, selectedValue: string) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      registrationData: {
        ...prevAttributes.registrationData,
        [field]: selectedValue,
      },
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleUpdate}>
      <Title title="Dados cadastrais" />
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="name"
            text={"Nome completo"}
            className={styles.label}
          />
          <Input
            type="text"
            id="fullName"
            name="registrationData.fullName"
            value={attributes.registrationData.fullName}
            className={styles.input}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="cpf" text={"CPF"} className={styles.label} />
          <Input
            type="text"
            id="cpf"
            name="cpf"
            value={attributes.registrationData.document.cpf}
            className={styles.input_double}
            onChange={handleChangeDoc}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="rg" text="RG" className={styles.label} />
          <Input
            type="text"
            id="rg"
            name="rg"
            value={attributes.registrationData.document.rg}
            className={styles.input_double}
            onChange={handleChangeDoc}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="nationality"
            text="Nacionalidade *"
            className={styles.label}
          />
          <Select
            id="nationality"
            name="registrationData.nationality"
            options={nacionalityOptions}
            value={attributes.registrationData.nationality}
            onChange={(selectedValue) =>
              handleSelectChange("nationality", selectedValue)
            }
            className={styles.input}
          />
        </div>
        <div className={styles.form_column}>
          <Label
            labelFor="maritalStatus"
            text="Estado civil"
            className={styles.label}
          />
          <Select
            id="maritalStatus"
            name="registrationData.maritalStatus"
            options={estadoCivilOptions}
            value={attributes.registrationData.maritalStatus}
            onChange={(selectedValue) =>
              handleSelectChange("maritalStatus", selectedValue)
            }
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="fatherName"
            text="Nome do pai"
            className={styles.label}
          />
          <Input
            type="text"
            id="fatherName"
            name="registrationData.fatherName"
            value={attributes.registrationData.fatherName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="motherName"
            text="Nome da Mãe"
            className={styles.label}
          />
          <Input
            type="text"
            id="motherName"
            name="registrationData.motherName"
            value={attributes.registrationData.motherName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="occupation"
            text="Profissão"
            className={styles.label}
          />
          <Input
            type="text"
            id="occupation"
            name="registrationData.occupation"
            value={attributes.registrationData.occupation}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="company" text="Empressa" className={styles.label} />
          <Input
            type="text"
            id="company"
            name="registrationData.company"
            value={attributes.registrationData.company}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="companyWebsite"
            text="Site da empresa"
            className={styles.label}
          />
          <Input
            type="text"
            id="companyWebsite"
            name="registrationData.companyWebsite"
            value={attributes.registrationData.companyWebsite}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <Title title="Dados de Contato" />
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="email" text="E-mail" className={styles.label} />
          <Input
            type="text"
            id="email"
            name="contactDetails.email"
            value={attributes.contactDetails.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="telephone"
            text="Telefone *"
            className={styles.label}
          />
          <Input
            type="text"
            id="telephone"
            name="contactDetails.telephone"
            value={attributes.contactDetails.telephone}
            onChange={handleChange}
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <Label
            labelFor="cellPhone"
            text="Celular *"
            className={styles.label}
          />
          <Input
            type="text"
            id="cellPhone"
            name="contactDetails.cellPhone"
            value={attributes.contactDetails.cellPhone}
            onChange={handleChange}
            className={styles.input_double}
          />
        </div>
      </div>
      <Title title="Endereço" />
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="zipCode" text="CEP" className={styles.label} />
          <Input
            type="text"
            id="zipCode"
            name="address.zipCode"
            value={attributes.address.zipCode}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="address" text="Endereço" className={styles.label} />
          <Input
            type="text"
            id="address"
            name="address.address"
            value={attributes.address.address}
            onChange={handleChange}
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="number" text="Número" className={styles.label} />
          <Input
            type="text"
            id="number"
            name="address.number"
            value={attributes.address.number}
            onChange={handleChange}
            className={styles.input_double}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="neighborhood"
            text="Bairro"
            className={styles.label}
          />
          <Input
            type="text"
            id="neighborhood"
            name="address.neighborhood"
            value={attributes.address.neighborhood}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="state" text="Estado" className={styles.label} />
          <Input
            type="text"
            id="state"
            name="address.state"
            value={attributes.address.state}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="city" text="Cidade" className={styles.label} />
          <Input
            type="text"
            id="city"
            name="address.city"
            value={attributes.address.city}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.container_btn}>
        <Button type="submit" text="SALVAR" />
      </div>
    </form>
  );
};
export default FormPersonalData;
