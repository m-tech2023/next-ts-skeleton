import React, { useEffect, useState } from "react";
import axios from "axios";
import ComponentLabel from "../../label";

interface ComponentInputSelectCitysProps {
  className: string;
  classNameLabel: string;
  classNameFlex: string;
  classNameContentFlex: string;
  htmlForState: string;
  idState: string;
  nameState: string;
  htmlForCity: string;
  idCity: string;
  nameCity: string;
  textCity: string;
  textState: string;
}

const ComponentInputSelectCitys: React.FC<ComponentInputSelectCitysProps> = ({
  className,
  classNameLabel,
  classNameFlex,
  classNameContentFlex,
  htmlForState,
  idState,
  nameState,
  htmlForCity,
  idCity,
  nameCity,
  textCity,
  textState,
}) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    async function fetchStates() {
      try {
        const res = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        setStates(res.data);
      } catch (error) {
        console.error("Erro ao buscar os estados:", error);
      }
    }

    async function fetchCities() {
      if (selectedState) {
        try {
          const res = await axios.get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
          );
          setCities(res.data);
        } catch (error) {
          console.error("Erro ao buscar as cidades:", error);
        }
      } else {
        setCities([]);
      }
    }
    fetchStates();
    fetchCities();
  }, [selectedState]);

  return (
    <div className={classNameFlex}>
      <div className={classNameContentFlex}>
        <ComponentLabel
          htmlFor={htmlForState}
          text={textState}
          className={classNameLabel}
        />
        <select
          id={idState}
          name={nameState}
          className={className}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Selecione um estado</option>
          {states.map((estado) => (
            <option key={estado.sigla} value={estado.sigla}>
              {estado.sigla}
            </option>
          ))}
        </select>
      </div>
      <div className={classNameContentFlex}>
        <ComponentLabel
          htmlFor={htmlForCity}
          text={textCity}
          className={classNameLabel}
        />
        <select
          id={idCity}
          name={nameCity}
          className={className}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Selecione uma cidade</option>
          {cities.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default ComponentInputSelectCitys;
