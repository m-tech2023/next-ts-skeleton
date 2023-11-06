import styles from "../FormDataProperties/styles.module.scss";
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
            value="Marcio Castro Silveira"
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
            value="984.098.870-02"
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
            value="18.685.256-3"
            placeholder=""
            className={styles.input_double}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="nameFather"
            text="Nacionalidade"
            className={styles.label}
          />
          <Input
            type="text"
            id="nameFather"
            name="nameFather"
            value="Brasileiro"
            placeholder=""
            className={styles.input}
          />
        </div>
        <div className={styles.form_column}>
          <Label labelFor="nameFather" text="Civíl" className={styles.label} />
          <Input
            type="text"
            id="nameFather"
            name="nameFather"
            value="Solteiro (a)"
            placeholder=""
            className={styles.input}
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
            value="Pedro Alves Silveira"
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
            value="Maria Castro"
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
            value="Engenheiro Elétrico"
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
            value="Energy Company"
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
            value="www.energycompany.com"
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
            value="marcus_silveira@gmail.com"
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
            value="(51) 985356782"
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
            value="(51) 985981382"
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
            value="94571-230"
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
            value="Estr. da Capororoca"
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
            value="695"
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
            value="Vila Universal"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <Label
            labelFor="neighborhood"
            text="Estado"
            className={styles.label}
          />
          <Input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value="Rio Grande do Sul"
            placeholder=""
            className={styles.input}
          />
        </div>
        <div className={styles.form_column}>
          <Label
            labelFor="neighborhood"
            text="Cidade"
            className={styles.label}
          />
          <Input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value="Viamão"
            placeholder=""
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
