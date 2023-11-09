import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const BreadCrumb = () => {
  const router = useRouter();
  const pathNames = router.asPath.split("/").filter((x) => x);

  return (
    <div className={`${styles.container_breadcrumb} container `}>
      <Link href="/" className={styles.link}>
        Home
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
      </Link>
      {pathNames.map((pathname, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathNames.length - 1;
        return (
          <span key={pathname}>
            <Link
              href={routeTo}
              className="fw-bold text-dark text-decoration-none"
            >
              {pathname.charAt(0).toUpperCase() +
                pathname.slice(1).toLocaleLowerCase().replaceAll("-", " ")}
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
