interface ComponentHeaderProps {
  title: string;
  subTitle?: string;
  classNameTitle?: string;
  classNameSubTitle?: string;
}
const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  title,
  subTitle,
  classNameTitle,
  classNameSubTitle,
}) => {
  return (
    <>
      <h2 className={classNameTitle}>{title}</h2>
      <p className={classNameSubTitle}>{subTitle}</p>
    </>
  );
};
export default ComponentHeader;
