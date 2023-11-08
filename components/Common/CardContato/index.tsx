import styles from "./styles.module.scss";
import youtube from "@/public/u434.svg";
import email from "@/public/u444.svg";
import local from "@/public/u446.svg";
import facebook from "@/public/u437.svg";
import instagram from "@/public/u431.svg";
import telefone from "@/public/u439.svg";
import Image from "next/image";

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
                alt="a"
                width={16}
                height={16}
                className="m-1"
              />
              (11) 4858-5115 (Escritório)
            </p>
            <p>
              <Image
                src={telefone}
                alt="a"
                width={16}
                height={16}
                className="m-1"
              />
              (15) 98177-4112 (Carlos Santana)
            </p>
            <p>
              <Image
                src={telefone}
                alt="a"
                width={16}
                height={16}
                className="m-1"
              />
              (11) 99669-9022 (Freitas Neto)
            </p>
          </li>
          <li className={`${styles.customBgLight} list-group-item p-3`}>
            <div className={styles.contact_email}>
              <Image
                src={email}
                alt="a"
                width={18}
                height={14}
                className="m-1"
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
                className="m-1"
              />
              Rua Fradique Coutinho 50 - 3º Andar - Conjunto 32 - Pinheiros -
              São Paulo/SP CEP 05416-010
            </div>
          </li>
          <li className={`${styles.customBgLight} list-group-item`}>
            <ul className="list-group d-flex flex-row justify-content-around mt-2">
              <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
                <Image
                  src={instagram}
                  alt="a"
                  width={14}
                  height={14}
                  className="m-1"
                />
                Instagram
              </li>
              <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
                <Image
                  src={youtube}
                  alt="a"
                  width={20}
                  height={14}
                  className="m-1"
                />
                Youtube
              </li>
              <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
                <Image
                  src={facebook}
                  alt="a"
                  width={14}
                  height={14}
                  className="m-1"
                />
                Facebook
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardContato;
