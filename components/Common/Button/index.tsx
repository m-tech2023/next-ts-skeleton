import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  className?: string;
  img?: string;
  alt?: string;
  disabled?: boolean;
  type?: "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${className} btn btn-lg btn-block w-100 text-white shadow-sm ${styles.bgPrimary}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;
