import styles from "../../../pages/area-cliente/styles.module.scss";
import ComponentButton from "../button";
import ComponentHeader from "../header";
import ComponentInput from "../input";
import ComponentLabel from "../label";
const FormPersonalData = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container_title}>
        <ComponentHeader text="Dados cadastrais" />
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="name"
            text="Nome completo"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel htmlFor="cpf" text="CPF" className={styles.label} />
          <ComponentInput
            type="text"
            id="cpf"
            name="cpf"
            placeholder=""
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <ComponentLabel htmlFor="rg" text="RG" className={styles.label} />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="nameFather"
            text="Nome do pai"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="nameMother"
            text="Nome do pai"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="profession"
            text="Profissão"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="empress"
            text="Empressa"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="site"
            text="Site da empresa"
            className={styles.label}
          />
          <ComponentInput
            type="text"
            id="site"
            name="site"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.container_title}>
        <ComponentHeader text="Dados de Contato" />
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="email"
            text="E-mail"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="tel"
            text="Telefone"
            className={styles.label}
          />
          <ComponentInput
            type="tel"
            id="tel"
            name="tel"
            placeholder=""
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="cel"
            text="Celular"
            className={styles.label}
          />
          <ComponentInput
            type="tel"
            id="cel"
            name="cel"
            placeholder=""
            className={styles.input_double}
          />
        </div>
      </div>
      <div className={styles.container_title}>
        <ComponentHeader text="Endereço" />
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <ComponentLabel htmlFor="cep" text="CEP" className={styles.label} />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="address"
            text="Endereço"
            className={styles.label}
          />
          <ComponentInput
            type="text"
            id="address"
            name="address"
            placeholder=""
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="addressNumber"
            text="Número"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="neighborhood"
            text="Bairro"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="state"
            text="Estado"
            className={styles.label}
          />
          <ComponentInput
            type="text"
            id="state"
            name="state"
            placeholder=""
            className={styles.input_double}
          />
        </div>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="city"
            text="Cidade"
            className={styles.label}
          />
          <ComponentInput
            type="text"
            id="city"
            name="city"
            placeholder=""
            className={styles.input_double}
          />
        </div>
      </div>
      <ComponentButton type="submit" text="SALVAR" className={styles.btn} />
    </form>
  );
};
export default FormPersonalData;