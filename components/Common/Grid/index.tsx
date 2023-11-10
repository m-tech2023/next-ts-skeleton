import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import PessoalBlack from "@/public/img-myaccount/pessoal-black.svg";
import PessoalWhite from "@/public/img-myaccount/pessoal-white.svg";
import CadeadoBlack from "@/public/img-myaccount/cadeado-black.svg";
import CadeadoWhite from "@/public/img-myaccount/cadeado-white.svg";
import PropriedadeBlack from "@/public/img-myaccount/propriedade-black.svg";
import PropriedadeWhite from "@/public/img-myaccount/propriedade-white.svg";
import LogBlack from "@/public/img-myaccount/log-black.svg";
import LogWhite from "@/public/img-myaccount/log-white.svg";
import RoseBlack from "@/public/img-myaccount/rosas-black.svg";
import RoseWhite from "@/public/img-myaccount/rosas-white.svg";
import FavoriteBlack from "@/public/img-myaccount/favorite-black.svg";
import FavoriteWhite from "@/public/img-myaccount/favorite-white.svg";
import Image from "next/image";

const Grid = () => {
  const router = useRouter();

  const pages = [
    {
      path: "/area-cliente/dados-pessoais",
      label: "Dados pessoais",
      icon:
        router.asPath === "/area-cliente/dados-pessoais"
          ? PessoalWhite
          : PessoalBlack,
    },
    {
      path: "/area-cliente/dados-da-propriedade",
      label: "Dados da propriedade",
      icon:
        router.asPath === "/area-cliente/dados-da-propriedade"
          ? PropriedadeWhite
          : PropriedadeBlack,
    },
    {
      path: "/area-cliente/dados-de-acesso",
      label: "Dados de acesso",
      icon:
        router.asPath === "/area-cliente/dados-de-acesso"
          ? CadeadoWhite
          : CadeadoBlack,
    },
    {
      path: "/area-cliente/meus-lances",
      label: "Meus lances",
      icon:
        router.asPath === "/area-cliente/meus-lances" ? RoseWhite : RoseBlack,
    },
    {
      path: "/area-cliente/meus-favoritos",
      label: "Meus favoritos",
      icon:
        router.asPath === "/area-cliente/meus-favoritos"
          ? FavoriteWhite
          : FavoriteBlack,
    },
    {
      path: "/area-cliente/logs-de-acessos",
      label: "Log de acessos",
      icon:
        router.asPath === "/area-cliente/logs-de-acessos" ? LogWhite : LogBlack,
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
                  color: router.asPath === page.path ? "#ffffff" : "black",
                  marginRight: "8px",
                }}
              >
                <Link
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "black",
                    textDecoration: "none",
                  }}
                  href={page.path}
                >
                  <div className={styles.container_content}>
                    <div className={styles.container_icon}>
                      <Image
                        src={page.icon}
                        alt={page.label}
                        className={styles.icon}
                        style={{
                          marginRight: "8px",
                        }}
                      />
                    </div>
                    <div className={styles.container_title_mod}>
                      <p>{page.label}</p>
                    </div>
                  </div>
                </Link>
              </td>
            ))}
          </tr>
          <tr>
            {pages.slice(2, 3).map((page) => (
              <td
                key={page.path}
                style={{
                  backgroundColor:
                    router.asPath === page.path ? "#37406d" : "#ffffff",
                  color: router.asPath === page.path ? "#ffffff" : "black",
                }}
              >
                <div className={styles.container_content}>
                  <div className={styles.container_icon}>
                    <Image
                      src={page.icon}
                      alt={page.label}
                      className={styles.icon}
                    />
                  </div>
                  <div className={styles.container_title_mod}>
                    <Link
                      style={{
                        color:
                          router.asPath === page.path ? "#ffffff" : "black",
                        textDecoration: "none",
                      }}
                      href={page.path}
                    >
                      <p>{page.label}</p>
                    </Link>
                  </div>
                </div>
              </td>
            ))}
            {pages.slice(3, 4).map((page) => (
              <td
                key={page.path}
                style={{
                  backgroundColor:
                    router.asPath === page.path ? "#37406d" : "#ffffff",
                  color: router.asPath === page.path ? "#ffffff" : "black",
                }}
              >
                <Link
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "black",
                    textDecoration: "none",
                  }}
                  href={page.path}
                >
                  <div className={styles.container_content}>
                    <div className={styles.container_icon}>
                      <Image
                        src={page.icon}
                        alt={page.label}
                        className={styles.icon}
                      />
                    </div>
                    <div className={styles.container_title}>
                      <div className={styles.label}>{page.label}</div>
                    </div>
                  </div>
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
                  color: router.asPath === page.path ? "#ffffff" : "black",
                }}
              >
                <Link
                  style={{
                    color: router.asPath === page.path ? "#ffffff" : "black",
                    textDecoration: "none",
                  }}
                  href={page.path}
                >
                  <div className={styles.container_content}>
                    <div className={styles.container_icon}>
                      <Image
                        src={page.icon}
                        alt={page.label}
                        className={styles.icon}
                      />
                    </div>
                    <div className={styles.container_title_mod}>
                      <p>{page.label}</p>
                    </div>
                  </div>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
