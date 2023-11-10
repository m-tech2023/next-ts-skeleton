import styles from "./styles.module.scss";

interface HeaderProps {
  title: string;
  subTitle?: string;
  classNameTitle?: string;
  classNameSubTitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  classNameTitle,
  classNameSubTitle,
}) => {
  return (
    <div className={styles.container_header}>
      <h1 className={`${styles.title} ${classNameTitle}`}>{title}</h1>
      <p className={`${styles.subtitle} ${classNameSubTitle}`}>{subTitle}</p>
    </div>
  );
};
export default Header;
