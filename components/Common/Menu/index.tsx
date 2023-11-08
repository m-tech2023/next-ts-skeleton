import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./styles.module.scss";
import LOGO_SEARCH from "@/public/icon/normal_search_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Button, CloseButton } from "reactstrap";
import closeBtn from "@/public/close_lightbox_u96.svg";

function Menu({ show, handleClose }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/resultado-de-busca/${search}`);
    }
  };
  return (
    <>
      <Offcanvas className={styles.header} show={show} onHide={handleClose}>
        <Offcanvas.Header className={styles.link} closeButton={false}>
          <Offcanvas.Title></Offcanvas.Title>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <Image src={closeBtn} alt="" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <div className="input-group p-2">
            <Form.Control
              type="string"
              className="border-end-0 p-3 shadow-none"
              placeholder="Procure por leilão, lote, raça ou código"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="input-group-text bg-white border-end-0 border-start-0">
              <Image
                src={LOGO_SEARCH}
                alt="Search Icon"
                style={{ cursor: "pointer" }}
                onClick={handleSearch}
              />
            </span>
          </div>

          <ListGroup className={styles.links} variant="flush">
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <ListGroup.Item className={styles.link} action href="#link1">
                Home <i className="bi bi-chevron-right" />
              </ListGroup.Item>
            </Link>
            <ListGroup.Item className={styles.link}>
              Leilões <i className="bi bi-chevron-right" />
            </ListGroup.Item>
            <Link href={"/venda-seu-cavalo"} style={{ textDecoration: "none" }}>
              <ListGroup.Item className={styles.link}>
                Venda seu cavalo <i className="bi bi-chevron-right" />
              </ListGroup.Item>
            </Link>
            <ListGroup.Item className={styles.link}>
              Noticias <i className="bi bi-chevron-right" />
            </ListGroup.Item>
            <Link href={"/sobre"} style={{ textDecoration: "none" }}>
              <ListGroup.Item className={styles.link}>
                Sobre <i className="bi bi-chevron-right" />
              </ListGroup.Item>
            </Link>
            <Link href={"/contato"} style={{ textDecoration: "none" }}>
              <ListGroup.Item className={styles.link}>
                Contato <i className="bi bi-chevron-right" />
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
