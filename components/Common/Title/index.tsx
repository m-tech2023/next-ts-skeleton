import styles from "./styles.module.scss";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className={styles.container_title}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
export default Title;
