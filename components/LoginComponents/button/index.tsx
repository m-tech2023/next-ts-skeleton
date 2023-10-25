import styles from "../styles.module.scss";

interface LoginButtonProps {
  text: string;
}
const LoginButton: React.FC<LoginButtonProps> = ({ text }) => {
  return (
    <div className={styles.btn}>
      <p>{text}</p>
    </div>
  );
};
export default LoginButton;
