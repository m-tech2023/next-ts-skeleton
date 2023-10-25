interface LoginButtonProps {
  text: string;
  className?: string;
  img?: string;
  alt?: string;
  type?: "submit" | "reset";
}
const LoginButton: React.FC<LoginButtonProps> = ({
  text,
  className,
  img,
  alt,
  type,
}) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} />
      <button type={type}>{text}</button>
    </div>
  );
};
export default LoginButton;
