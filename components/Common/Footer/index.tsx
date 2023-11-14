import Image from "next/image";
import styles from "./styles.module.scss";
import arrow from "@/public/u277.svg";
import facebook from "@/public/u307.svg";
import instagram from "@/public/u301.svg";
import youtube from "@/public/u304.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="mt-5">
      <div className={styles.footer}>
        <div
          className="accordion accordion-flush container"
          id="accordionFlushExample"
        >
          <div className="accordion-item bg-transparent">
            <h2
              className="accordion-header"
              style={{ backgroundColor: "#37406d" }}
            >
              <button
                className="collapsed bg-transparent text-white "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Mapa do site
                <Image src={arrow} width={16} height={10} alt="flecha" />
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#2C3357" }}
            >
              <div className="accordion-body">
                <ul className="list-group">
                  <Link href={"/"} style={{ textDecoration: "none" }}>
                    <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0 border-top-0">
                      Home
                    </li>
                  </Link>
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                    Leilões
                  </li>
                  <Link
                    href={"/venda-seu-cavalo"}
                    style={{ textDecoration: "none" }}
                  >
                    <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                      Venda seu Cavalo
                    </li>
                  </Link>
                  <Link href={"/sobre"} style={{ textDecoration: "none" }}>
                    <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                      Sobre
                    </li>
                  </Link>
                  <Link href={"/contato"} style={{ textDecoration: "none" }}>
                    <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0 border-bottom-0">
                      Contato
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent ">
            <h2 className="accordion-header">
              <button
                className="collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Contatos
                <Image src={arrow} width={16} height={10} alt="flecha" />
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#2C3357" }}
            >
              <div className="accordion-body">
                <p className="text-white">(11) 4858-5115 (Escritório)</p>
                <p className="text-white">(15) 98177-4112 (Carlos Santana)</p>
                <p className="text-white">(11) 99669-9022 (Freitas Neto)</p>
                <p className="text-white">contato@opportunityleiloes.com.br</p>
                <p className="text-white">-</p>
                <p className="text-white">
                  Rua Fradique Coutinho 50 - 3º Andar - Cj 32 Pinheiros - São
                  Paulo/SP - CEP 05416-010 |{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.container_redes} container`}>
          <ul className="list-group d-flex flex-row">
            <Link
              href={"https://www.instagram.com/opportunityleiloes_qm_ph/"}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>
                <Image
                  src={instagram}
                  alt="instagram opportunity"
                  width={14}
                  height={14}
                  className="m-1"
                />
                Instagram
              </li>
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCfaSBPNlgeEY3-bt937dGhg"}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>
                <Image
                  src={youtube}
                  alt="youtube opportunity"
                  width={20}
                  height={14}
                  className="m-1"
                />
                Youtube
              </li>
            </Link>
            <Link
              href={"https://www.facebook.com/opportunityleiloes/"}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>
                <Image
                  src={facebook}
                  alt="facebook opportunity"
                  width={14}
                  height={14}
                  className="m-1"
                />
                Facebook
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={`${styles.footerInfo}  py-3`}>
        <div className="container">
          <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
            Opportunity Organizacão de Leilões Eireli
          </h6>
          <p style={{ fontWeight: "300", fontSize: "14px" }}>
            CNPJ 33.034.852/0001-59
          </p>
          <p className={styles.footerInfoItalico}>
            © 2023 - Todos direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
