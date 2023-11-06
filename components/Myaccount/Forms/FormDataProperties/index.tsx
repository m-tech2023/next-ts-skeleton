import styles from "./styles.module.scss";
import Title from "../../Title";
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
            value="Haras da Sotéia"
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
            value="marcio_castro@gmail.com"
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
            className={styles.input}
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
              value="94571-230"
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
              value="Estr. da Capororoca"
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
              value="695"
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
export default FormDataProperties;
