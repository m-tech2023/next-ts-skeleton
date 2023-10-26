import React from "react";
import { useRouter } from "next/router";

const ComponentGrid = () => {
  const router = useRouter();

  const pages = [
    { path: "/area-cliente/dados-pessoais", label: "Dados pessoais" },
    { path: "/area-cliente/dados-da-propriedade", label: "Dados propriedade" },
    { path: "/area-cliente/dados-de-acesso", label: "Dados de acesso" },
    { path: "/area-cliente/meus-lances", label: "Meus lances" },
    { path: "/area-cliente/meus-favoritos", label: "Meus favoritos" },
    { path: "/area-cliente/log-de-acessos", label: "Log de acessos" },
  ];

  return (
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
              }}
            >
              {page.label}
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
              {page.label}
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
              {page.label}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ComponentGrid;
