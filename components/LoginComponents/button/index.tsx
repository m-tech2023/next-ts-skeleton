interface LoginButtonProps {
  text: string;
  className?: string;
  img?: string;
  alt?: string;
}
const LoginButton: React.FC<LoginButtonProps> = ({
  text,
  className,
  img,
  alt,
}) => {
  return (
    <div className={className}>
      <img src={img} alt={alt} />
      <p>{text}</p>
    </div>
  );
};
export default LoginButton;
