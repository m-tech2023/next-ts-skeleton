interface LoginButtonProps {
  text: string;
  className?: string;
  img?: string;
  alt?: string;
  type?: "submit" | "reset";
  onClick?: () => void;
  classNameButton?: string;
}
const LoginButton: React.FC<LoginButtonProps> = ({
  text,
  className,
  classNameButton,
  img,
  alt,
  type,
  onClick,
}) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} />
      <button className={classNameButton} onClick={onClick} type={type}>
        {text}
      </button>
    </div>
  );
};
export default LoginButton;
