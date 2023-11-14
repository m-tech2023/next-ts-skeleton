import styles from "./styles.module.scss";

interface TitleProps {
  title: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ title, color }) => {
  const textColor = color && color !== "" ? color : "#02a2e9";
  return (
    <div className={styles.container_title}>
      <h2 className={styles.title} style={{ color: textColor }}>
        {title}
      </h2>
    </div>
  );
};
export default Title;
