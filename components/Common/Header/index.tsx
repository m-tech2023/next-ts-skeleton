import styles from "./styles.module.scss";

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div className={styles.container_header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subTitle}</p>
    </div>
  );
};
export default Header;