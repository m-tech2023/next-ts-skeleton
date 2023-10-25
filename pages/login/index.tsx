import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "@/components/LoginComponents/form";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <p>Home</p>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
        <span>Login</span>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>Login</h2>
      </div>
      <div className={styles.container_form}>
        <LoginForm />
        <div className={styles.hr} />
        <div className={styles.register}>
          <p>
            Ainda não tem uma conta?{" "}
            <Link href={"/register"} className={styles.link}>
              Cadastra-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
