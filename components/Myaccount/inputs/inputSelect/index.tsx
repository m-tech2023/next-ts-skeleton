import React from "react";

interface ComponentInputSelectProps {
  id: string;
  name: string;
  className?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const estadoCivilOptions = [
  "Selecione um estado civil",
  "Casado(a)",
  "Solteiro(a)",
  "Separado(a)",
  "Divorciado(a)",
  "Viúvo(a)",
  "Não informar(a)",
];
export const nacionalityOptions = [
  "Selecione uma Nacionalidade",
  "Afeganistão",
  "África do Sul",
  "Albânia",
  "Alemanha",
  "Andorra",
  "Angola",
  "Antiga e Barbuda",
  "Arábia Saudita",
  "Argélia",
  "Argentina",
  "Armênia",
  "Austrália",
  "Áustria",
  "Azerbaijão",
  "Bahamas",
  "Bahrein",
  "Bangladesh",
  "Barbados",
  "Bélgica",
  "Belize",
  "Benin",
  "Bielorrússia",
  "Bolívia",
  "Bósnia e Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunei",
  "Bulgária",
  "Burkina Faso",
  "Burundi",
  "Butão",
  "Cabo Verde",
  "Camarões",
  "Camboja",
  "Canadá",
  "Catar",
  "Cazaquistão",
  "Chade",
  "Chile",
  "China",
  "Chipre",
  "Cingapura",
  "Colômbia",
  "Comores",
  "Coreia do Norte",
  "Coreia do Sul",
  "Costa do Marfim",
  "Costa Rica",
  "Croácia",
  "Cuba",
  "Dinamarca",
  "Djibuti",
  "Dominica",
  "Egito",
  "El Salvador",
  "Emirados Árabes Unidos",
  "Equador",
  "Eritreia",
  "Eslováquia",
  "Eslovênia",
  "Espanha",
  "Estados Unidos",
  "Estônia",
  "Etiópia",
  "Fiji",
  "Filipinas",
  "Finlândia",
  "França",
  "Gabão",
  "Gâmbia",
  "Gana",
  "Geórgia",
  "Granada",
  "Grécia",
  "Guatemala",
  "Guiana",
  "Guiné",
  "Guiné Equatorial",
  "Guiné-Bissau",
  "Haiti",
  "Holanda",
  "Honduras",
  "Hungria",
  "Iêmen",
  "Índia",
  "Indonésia",
  "Irã",
  "Iraque",
  "Irlanda",
  "Islândia",
  "Israel",
  "Itália",
  "Jamaica",
  "Japão",
  "Jordânia",
  "Kiribati",
  "Kuwait",
  "Laos",
  "Lesoto",
  "Letônia",
  "Líbano",
  "Libéria",
  "Líbia",
  "Liechtenstein",
  "Lituânia",
  "Luxemburgo",
  "Macedônia",
  "Madagáscar",
  "Malásia",
  "Malaui",
  "Maldivas",
  "Mali",
  "Malta",
  "Marrocos",
  "Maurícia",
  "Mauritânia",
  "México",
  "Mianmar",
  "Micronésia",
  "Moçambique",
  "Moldávia",
  "Mônaco",
  "Mongólia",
  "Montenegro",
  "Namíbia",
  "Nauru",
  "Nepal",
  "Nicarágua",
  "Níger",
  "Nigéria",
  "Noruega",
  "Nova Zelândia",
  "Omã",
  "Palau",
  "Palestina",
  "Panamá",
  "Papua-Nova Guiné",
  "Paquistão",
  "Paraguai",
  "Peru",
  "Polônia",
  "Portugal",
  "Quênia",
  "Quirguistão",
  "Quiribati",
  "Reino Unido",
  "República Centro-Africana",
  "República Dominicana",
  "República Tcheca",
  "Romênia",
  "Rússia",
  "Ruanda",
  "Samoa",
  "San Marino",
  "Santa Lúcia",
  "São Cristóvão e Nevis",
  "São Tomé e Príncipe",
  "São Vicente e Granadinas",
  "Seicheles",
  "Senegal",
  "Serra Leoa",
  "Sérvia",
  "Síria",
  "Somália",
  "Sri Lanka",
  "Suazilândia",
  "Sudão",
  "Sudão do Sul",
  "Suécia",
  "Suíça",
  "Suriname",
  "Tailândia",
  "Taiwan",
  "Tajiquistão",
  "Tanzânia",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad e Tobago",
  "Tunísia",
  "Turcomenistão",
  "Turquia",
  "Tuvalu",
  "Ucrânia",
  "Uganda",
  "Uruguai",
  "Uzbequistão",
  "Vanuatu",
  "Vaticano",
  "Venezuela",
  "Vietnã",
  "Zâmbia",
  "Zimbábue",
];

const ComponentInputSelect: React.FC<ComponentInputSelectProps> = ({
  id,
  name,
  className,
  options,
  value,
  onChange,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };
  return (
    <select
      id={id}
      name={name}
      className={className}
      value={value}
      onChange={handleSelectChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ComponentInputSelect;
