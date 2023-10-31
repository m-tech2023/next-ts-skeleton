import styles from "./styles.module.scss";

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <div className={styles.container_header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subTitle}</p>
    </div>
  );
};
export default Header;
