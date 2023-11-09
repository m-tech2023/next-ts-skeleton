import styles from "./styles.module.scss";
import Breadcrumb from "../../components/Common/BreadCrumb";
import Header from "@/components/Common/Header";

const Sobre = () => {
  const aboutText: string[] = [
    "Opportunity Leilões, uma empresa formada por profissionais com mais de 35 anos de experiência em leilões rurais, surge no mercado do agronegócio como opção para tornar os leilões mais acessíveis ao vendedor e comprador, nossos trabalhos tem como objetivo atender as necessidades e expectativas dos pequenos, médios e grandes criadores, com muita dedicação, transparência e objetividade em nossos serviços.",
    "Nossa equipe esta preparada para atender as necessidades dos clientes com planejamento e estruturação na realização do leilão, tornado o mais acessivel ao maior número possivel de interessados ao negócio.",
    "Prezamos pelo cuidado com a realização de um bom negócio, que vai além da segurança das transações; estende-se a uma analise criteriosa na seleção do cadastro, ao marketing de cada leilão, atendimento a cada cliente, acompanhamento de foto e filmagem, cuidado com a devida documentação dos animais, gestão e assessoria cobrança pós-venda e entre outros princípios que prezam para a eficiência de nossos serviços.",
    "Venha nos conhecer e seja nosso parceiro, prepare seus animais e deixe que nós executamos os negócios!!!",
    "Opportunity Leilões - Oportunidade de bons negócios!!!",
  ];

  return (
    <div className={`${styles.container} container`}>
      <Breadcrumb />
      <div className={styles.container_content}>
        <Header title="Sobre" />
        {aboutText.map((text: string, key: number) => {
          return (
            <p className="px-4 text-start" key={key}>
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Sobre;
