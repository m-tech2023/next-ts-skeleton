import BreadCrumb from "@/components/Common/BreadCrumb";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";
import Header from "@/components/Common/Header";

const data = [
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
  {
    user: "Gomes_SP",
    date: "dd/mm/aaaa - hh:mm:ss",
    value: "10.000,00",
    link: "Nome do leilão",
  },
];

const MyBidsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Meus lances"
          classNameTitle={styles.title}
          classNameSubTitle={styles.sub_title}
        />
      </div>
      <BreadCrumb />
      <Grid />
      <div className={`${styles.container_data} mt-5`}>
        <table>
          <thead>
            <tr>
              <td className={`${styles.nav} text-left`}>Usuário e data</td>
              <td className={`${styles.nav} text-center`}>Valor do lance</td>
              <td className={`${styles.nav} text-center`}>Link do leilão</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td key={index}>
                  <p style={{ fontWeight: "bold" }}>{item.user}</p>
                  <span>{item.date}</span>
                </td>
                <td className="text-center">
                  R$ <br /> {item.value}
                </td>
                <td className={`${styles.link} text-center`}>{item.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyBidsPage;
