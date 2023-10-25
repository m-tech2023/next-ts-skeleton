import styles from "../styles.module.scss";

interface LoginButtonProps {
  text: string;
}
const LoginButton: React.FC<LoginButtonProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
export default LoginButton;
