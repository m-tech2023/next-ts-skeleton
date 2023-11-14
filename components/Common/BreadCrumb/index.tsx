import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import React from "react";

interface Prop {
  color?: string;
}

const BreadCrumb: React.FC<Prop> = ({ color }) => {
  const router = useRouter();
  const pathNames = router.asPath.split("/").filter((x) => x);
  const textColor = color && color !== "" ? color : "black";

  return (
    <div className={`${styles.container_breadcrumb} container `}>
      <Link href="/" className={styles.link} style={{ color: textColor }}>
        Home
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
      </Link>
      {pathNames.map((pathname, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathNames.length - 1;
        return (
          <span key={pathname} style={{ color: textColor }}>
            <Link
              href={routeTo}
              className={styles.link}
              style={{ color: textColor, fontWeight: "bold" }}
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
