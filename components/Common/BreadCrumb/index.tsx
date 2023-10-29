import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './styles.module.scss';

interface BreadCrumbProps {
  lastText: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  lastText,
}) => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);

  return (
    <div className={styles.container_breadcrumb}>
      <Link href="/">
        Home
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={pathname}>
            <Link
              href={routeTo}
              className={`${styles.link} ${isLast ? lastText : ""}`}
            >
              {pathname}
            </Link>
            {!isLast && (
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
            )}
          </span>
        );
      })}
    </div>
  );
};
export default BreadCrumb;
