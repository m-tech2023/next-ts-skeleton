import styles from "../FormDataProperties/styles.module.scss";
import ComponentInputSelect, {
  estadoCivilOptions,
  nacionalityOptions,
} from "../../Inputs/inputSelect";
import ComponentInputSelectCitys from "../../Inputs/inputSelectCitys";
import Title from "../../Title";
import Label from "@/components/Common/Label";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";

const FormPersonalData = () => {
  return (
    <form className={styles.form}>
      <Title title="Dados cadastrais" />
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="name"
            text="Nome completo"
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
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="cpf" text="CPF" className={styles.label} />
          <Input
            type="text"
            id="cpf"
            name="cpf"
            placeholder=""
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="rg" text="RG" className={styles.label} />
          <Input
            type="text"
            id="rg"
            name="rg"
            placeholder=""
            className={styles.input_double}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="nacionality"
            text="Nacionalidade *"
            className={styles.label}
          />
          <ComponentInputSelect
            id="nacionality"
            name="nacionality"
            className={styles.input}
            options={nacionalityOptions}
          />
        </div>
        <div className={styles.form_column}>
          <Label
            labelFor="civil"
            text="Estado civil"
            className={styles.label}
          />
          <ComponentInputSelect
            id="civil"
            name="civil"
            className={styles.input}
            options={estadoCivilOptions}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="nameFather"
            text="Nome do pai"
            className={styles.label}
          />
          <Input
            type="text"
            id="nameFather"
            name="nameFather"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="nameMother"
            text="Nome da Mãe"
            className={styles.label}
          />
          <Input
            type="text"
            id="nameMother"
            name="nameMother"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="profession"
            text="Profissão"
            className={styles.label}
          />
          <Input
            type="text"
            id="profession"
            name="profession"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="empress" text="Empressa" className={styles.label} />
          <Input
            type="empress"
            id="empress"
            name="empress"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="site"
            text="Site da empresa"
            className={styles.label}
          />
          <Input
            type="text"
            id="site"
            name="site"
            placeholder=""
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
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="cel" text="Celular *" className={styles.label} />
          <Input
            type="tel"
            id="cel"
            name="cel"
            placeholder=""
            className={styles.input_double}
          />
        </div>
      </div>
      <Title title="Endereço" />
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
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label labelFor="address" text="Endereço" className={styles.label} />
          <Input
            type="text"
            id="address"
            name="address"
            placeholder=""
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <Label
            labelFor="addressNumber"
            text="Número"
            className={styles.label}
          />
          <Input
            type="text"
            id="addressNumber"
            name="addressNumber"
            placeholder=""
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
export default FormPersonalData;
