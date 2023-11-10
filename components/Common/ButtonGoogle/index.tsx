import Image from "next/image";

interface ButtonGoogleProps {
  text: string;
  className?: string;
  img?: string;
  alt?: string;
  type?: "submit" | "reset";
  onClick?: () => void;
  classNameButton?: string;
}
const ButtonGoogle: React.FC<ButtonGoogleProps> = ({
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
      <Image src={img} alt={alt} width={30} height={30} />
      <button className={classNameButton} onClick={onClick} type={type}>
        {text}
      </button>
    </div>
  );
};
export default ButtonGoogle;
