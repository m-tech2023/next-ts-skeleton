import Header from "@/components/Common/Header";
import styles from "@/pages/area-cliente/styles.module.scss";
import ComponentButton from "../button";
import ComponentInput from "../inputs/input";
import ComponentInputSelectCitys from "../inputs/inputSelectCitys";
import ComponentLabel from "../label";

const FormDataProperties = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container_title}>
        <Header title="Dados cadastrais" />
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="name"
            text="Nome da Fazenda / Haras"
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
      <div className={styles.container_title}>
        <Header title="Dados de contato" />
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="email"
            text="E-mail"
            className={styles.label}
          />
          <ComponentInput
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
          <ComponentLabel
            htmlFor="tel"
            text="Telefone *"
            className={styles.label}
          />
          <ComponentInput
            type="tel"
            id="tel"
            name="tel"
            placeholder=""
            className={styles.input}
          />
        </div>
        <div className={styles.form_column}>
          <ComponentLabel
            htmlFor="cel"
            text="Celular *"
            className={styles.label}
          />
          <ComponentInput
            type="tel"
            id="cel"
            name="cel"
            placeholder=""
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.container_title}>
        <Header title="Endereço" />
      </div>
      <div className={styles.form_group}>
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
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_group}>
          <div className={styles.form_column}>
            <ComponentLabel
              htmlFor="address"
              text="Endereço"
              className={styles.label}
            />
            <ComponentInput
              type="address"
              id="address"
              name="address"
              placeholder=""
              className={styles.input}
            />
          </div>
          <div className={styles.form_column}>
            <ComponentLabel
              htmlFor="numberAddress"
              text="Número"
              className={styles.label}
            />
            <ComponentInput
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
          <ComponentLabel
            htmlFor="neighborhood"
            text="Bairro"
            className={styles.label}
          />
          <ComponentInput
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
      <ComponentButton type="submit" text="SALVAR" className={styles.btn} />
    </form>
  );
};
export default FormDataProperties;
