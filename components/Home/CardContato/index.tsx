import styles from "./styles.module.scss";
import youtube from "@/public/u434.svg";
import email from "@/public/u444.svg";
import local from "@/public/u446.svg";
import facebook from "@/public/u437.svg";
import instagram from "@/public/u431.svg";
import telefone from "@/public/u439.svg";
import Image from "next/image";
import Link from "next/link";

function CardContato() {
  return (
    <div className="container mb-5">
      <h2 className="fw-bolder mt-5 mb-4">Nossos Contatos</h2>
      <div className="card shadow border-0">
        <ul className="list-group list-group-flush">
          <li className={`${styles.customBgLight} list-group-item p-3`}>
            <p>
              <Image
                src={telefone}
                alt="telefone de contato"
                width={16}
                height={16}
                style={{ marginRight: "15px" }}
              />
              (11) 4858-5115 (Escritório)
            </p>
            <p>
              <Image
                src={telefone}
                alt="telefone de contato"
                width={16}
                height={16}
                style={{ marginRight: "15px" }}
              />
              (15) 98177-4112 (Carlos Santana)
            </p>
            <p style={{ marginBottom: "0" }}>
              <Image
                src={telefone}
                alt="telefone de contato"
                width={16}
                height={16}
                style={{ marginRight: "15px" }}
              />
              (11) 99669-9022 (Freitas Neto)
            </p>
          </li>
          <li className={`${styles.customBgLight} list-group-item p-3`}>
            <div className={styles.contact_email}>
              <Image
                src={email}
                alt="email de contato"
                width={18}
                height={14}
                style={{ marginRight: "15px" }}
              />
              contato@opportunityleiloes.com.br
            </div>
          </li>
          <li className={`${styles.customBgLight} list-group-item p-3`}>
            <div className={styles.contact_email}>
              <Image
                src={local}
                alt="a"
                width={20}
                height={20}
                style={{ marginRight: "15px" }}
              />
              Rua Fradique Coutinho 50 - 3º Andar - Conjunto 32 - Pinheiros -
              São Paulo/SP CEP 05416-010
            </div>
          </li>
          <li className={`${styles.customBgLight} list-group-item`}>
            <ul className="list-group d-flex flex-row justify-content-around mt-2">
              <Link
                href={"https://www.instagram.com/opportunityleiloes_qm_ph/"}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
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
                href={
                  "https://www.youtube.com/channel/UCfaSBPNlgeEY3-bt937dGhg"
                }
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
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
                style={{ textDecoration: "none" }}
              >
                <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardContato;
