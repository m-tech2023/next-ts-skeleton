import BreadCrumb from "@/components/Common/BreadCrumb";
import Grid from "@/components/Common/Grid";
import styles from "../styles.module.scss";
import Header from "@/components/Common/Header";

const data = [
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
  {
    date: "dd/mm/aaa",
    hour: "hh:mm:ss",
    ip: "201.42.177.131",
  },
];

const LogsAcessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <Header
          title="Minha conta"
          subTitle="Logs de acessos"
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
              <td className={`${styles.nav} text-center`}>Data e horário</td>
              <td className={`${styles.nav} text-center`}>IP de acesso</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td className="text-center" key={index}>
                  <p>{item.date}</p>
                  <span>{item.hour}</span>
                </td>
                <td className="text-center">{item.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LogsAcessPage;
