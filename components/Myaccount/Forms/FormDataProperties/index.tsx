import styles from "./styles.module.scss";
import ComponentInputSelectCitys from "../../Selects/InputSelectCitys";
import Title from "../../../Common/Title";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";

const FormDataProperties = () => {
  return (
    <form className={styles.form}>
      <Title title="Dados cadastrais" />
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="name"
            text="Nome da Fazenda / Haras"
            className={styles.label}
          />
          <Input
            type="text"
            id="name"
            name="name"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <Title title="Dados de contato" />
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="email" text="E-mail" className={styles.label} />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="tel" text="Telefone *" className={styles.label} />
          <Input
            type="tel"
            id="tel"
            name="tel"
            placeholder=""
            className={styles.input}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="cel" text="Celular *" className={styles.label} />
          <Input
            type="tel"
            id="cel"
            name="cel"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <Title title="Endereço" />
      <div className={styles.form_group}>
        <div className={styles.form_group}>
          <div className={styles.form_column}>
            <Label labelFor="cep" text="CEP" className={styles.label} />
            <Input
              type="text"
              id="cep"
              name="cep"
              placeholder=""
              className={styles.input}
            />
          </div>
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_group}>
          <div className={styles.form_column}>
            <Label
              labelFor="address"
              text="Endereço"
              className={styles.label}
            />
            <Input
              type="address"
              id="address"
              name="address"
              placeholder=""
              className={styles.input}
            />
          </div>
          <div className={styles.form_column}>
            <Label
              labelFor="numberAddress"
              text="Número"
              className={styles.label}
            />
            <Input
              type="text"
              id="numberAddress"
              name="numberAddress"
              placeholder=""
              className={styles.input}
            />
          </div>
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
            type="address"
            id="neighborhood"
            name="neighborhood"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <ComponentInputSelectCitys
            textState="Estado *"
            htmlForState="state"
            idState="state"
            nameState="state"
            textCity="Cidade *"
            htmlForCity="city"
            idCity="city"
            nameCity="city"
            classNameFlex={styles.container_inputs_flex}
            classNameContentFlex={styles.classNameContentFlex}
            classNameLabel={styles.label}
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
export default FormDataProperties;
