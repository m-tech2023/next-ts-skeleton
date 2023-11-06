import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./styles.module.scss";

import LOGO_SEARCH from "@/public/icon/normal_search_icon.svg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Link from "next/link";

function Menu({ show, handleClose }) {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  const handleSearch = () => {
    router.push(`/resultado-de-busca/${inputValue}`);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <Offcanvas className={styles.header} show={show} onHide={handleClose}>
        <Offcanvas.Header className={styles.link} closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <Form onSubmit={handleSearch}>
            <div className="input-group p-2">
              <Form.Control
                type="string"
                className="border-end-0 p-3"
                placeholder="Procure por leilão, lote, raça ou código"
                onChange={handleInputChange}
              />
              <span className="input-group-text bg-white border-end-0 border-start-0">
                <Image
                  src={LOGO_SEARCH}
                  alt="Search Icon"
                  onClick={handleSearch}
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
          </Form>
          <ListGroup className={styles.links} variant="flush">
            <ListGroup.Item className={styles.link} action href="#link1">
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fas fa-chevron-right"
              ></FontAwesomeIcon>
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Leilões{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fas fa-chevron-right"
              ></FontAwesomeIcon>
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              <Link
                href={"/venda-seu-cavalo"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Venda seu cavalo{" "}
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fas fa-chevron-right"
              ></FontAwesomeIcon>
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Noticias{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fas fa-chevron-right"
              ></FontAwesomeIcon>
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              <Link
                href={"/sobre"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Sobre
              </Link>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fas fa-chevron-right"
              ></FontAwesomeIcon>
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Contato{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="fas fa-chevron-right"
              ></FontAwesomeIcon>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
