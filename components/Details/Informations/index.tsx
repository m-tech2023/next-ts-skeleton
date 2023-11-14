import styles from "./styles.module.scss";
import React from "react";
import View from "@/public/u441.svg";
import Download from "@/public/u407.svg";
import Shared from "@/public/u445.svg";
import Image from "next/image";

const Informations = () => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.container_accordion} accordion`}
        id="accordionExample"
      >
        <div className={`${styles.accordion_item} accordion-item`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Informações Principais
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className={`${styles.accordion_body} accordion-body`}>
              <p>
                <strong>Prazo para pré-lances:</strong> Início: 28/08/2023 às
                08:00 Término: 28/08/2023 às 08:00
              </p>
              <p>
                <strong>Termos e condições Condições:</strong> 40 parcelas
                (2+2+2+2+2+30)
              </p>
              <p>
                Comissão de Compra: 8% Incremento Mínimo: R$ 30,00 Raças do
                leilão
              </p>
              <p>Raças do leilão</p>
            </div>
          </div>
        </div>
        <div className={`${styles.accordion_item} accordion-item`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Descrição
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate. Exampaunis: Lorem ipsum dolor sit ametLorem ipsum dolor
              sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo
              commodo.
            </div>
          </div>
        </div>
        <div className={`${styles.accordion_item} accordion-item`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Regulamento
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate. Exampaunis: Lorem ipsum dolor sit ametLorem ipsum dolor
              sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo
              commodo.
            </div>
          </div>
        </div>
        <div
          className={`${styles.accordion_item} accordion-item`}
          style={{ border: "1px solid black" }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Pré-catálago
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className={styles.container_catalog}>
                <div className={styles.catalog}>
                  <Image src={View} alt="Visualizar" />
                  <p>Visualizar</p>
                </div>
                <div className={styles.catalog}>
                  <Image src={Download} alt="Visualizar" />
                  <p>Baixar</p>
                </div>
                <div className={styles.catalog}>
                  <Image src={Shared} alt="Visualizar" />
                  <p>Compartilhar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
