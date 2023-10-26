import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface BreadCrumbProps {
  className: string;
  classNameIcon: string;
  lastText: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  className,
  classNameIcon,
  lastText,
}) => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);

  return (
    <>
      <Link href="/" className={className}>
        Home
        <FontAwesomeIcon icon={faAngleRight} className={classNameIcon} />
      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={pathname}>
            <Link
              href={routeTo}
              className={`${className} ${isLast ? lastText : ""}`}
            >
              {pathname}
            </Link>
            {!isLast && (
              <FontAwesomeIcon icon={faAngleRight} className={classNameIcon} />
            )}
          </span>
        );
      })}
    </>
  );
};
export default BreadCrumb;
