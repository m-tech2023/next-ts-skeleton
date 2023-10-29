import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ComponentGrid = () => {
  const router = useRouter();

  const pages = [
    {
      path: "/area-cliente/dados-pessoais",
      label: "Dados pessoais",
      icon: faUser,
    },
    {
      path: "/area-cliente/dados-da-propriedade",
      label: "Dados da propriedade",
      icon: faSheetPlastic,
    },
    {
      path: "/area-cliente/dados-de-acesso",
      label: "Dados de acesso",
      icon: faLock,
    },
    {
      path: "/area-cliente/meus-lances",
      label: "Meus lances",
      icon: faCoins,
    },
    {
      path: "/area-cliente/meus-favoritos",
      label: "Meus favoritos",
      icon: faBookmark,
    },
    {
      path: "/area-cliente/logs-de-acessos",
      label: "Log de acessos",
      icon: faClipboard,
    },
  ];

  return (
    <div className={styles.container_grid}>
      <table>
        <tbody>
          <tr>
            {pages.slice(0, 2).map((page) => (
              <td
                key={page.path}
                style={{
                  backgroundColor:
                    router.asPath === page.path ? "#37406d" : "#ffffff",
                  color: router.asPath === page.path ? "#ffffff" : "#000000",
                  marginRight: "8px",
                }}
              >
                <FontAwesomeIcon
                  icon={page.icon}
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "#37406d",
                    marginRight: "8px",
                  }}
                />
                <Link
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "#37406d",
                    textDecoration: "none",
                  }}
                  href={page.path}
                >
                  {page.label}
                </Link>
              </td>
            ))}
          </tr>
          <tr>
            {pages.slice(2, 4).map((page) => (
              <td
                key={page.path}
                style={{
                  backgroundColor:
                    router.asPath === page.path ? "#37406d" : "#ffffff",
                  color: router.asPath === page.path ? "#ffffff" : "#000000",
                }}
              >
                <FontAwesomeIcon
                  icon={page.icon}
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "#37406d",
                    marginRight: "8px",
                  }}
                />
                <Link
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "#37406d",
                    textDecoration: "none",
                  }}
                  href={page.path}
                >
                  {page.label}
                </Link>
              </td>
            ))}
          </tr>
          <tr>
            {pages.slice(4, 6).map((page) => (
              <td
                key={page.path}
                style={{
                  backgroundColor:
                    router.asPath === page.path ? "#37406d" : "#ffffff",
                  color: router.asPath === page.path ? "#ffffff" : "#000000",
                }}
              >
                <FontAwesomeIcon
                  icon={page.icon}
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "#37406d",
                    marginRight: "8px",
                  }}
                />
                <Link
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "#37406d",
                    textDecoration: "none",
                  }}
                  href={page.path}
                >
                  {page.label}
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComponentGrid;
