import styles from "./styles.module.scss";
import LOGO_BRAZIL from "@/public/icon/brazil.svg";
import LOGO_HEADER from "@/public/icon/menu_and_search_icon.svg";
import LOGO_OPPORTUNITY from "@/public/icon/opportunity_leil_es_logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu";
import ModalLang from "../Modal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ModalLang />
      <nav className="navbar fixed-top shadow bg-body-tertiary rounded-0 py-0">
        <div className="container">
          <div className={styles.container_content}>
            <span className="navbar-brand">
              <Image
                src={LOGO_HEADER}
                alt="Menu Icon"
                className="menu-icon"
                onClick={handleShow}
                width={30}
                height={30}
                style={{ cursor: "pointer" }}
              />
            </span>

            <span className="navbar-brand">
              <Link href={"/"}>
                <Image
                  src={LOGO_OPPORTUNITY}
                  alt="Opportunity Logo"
                  width={100}
                  height={34}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </span>
          </div>

          <div className={styles.container_content}>
            <span className="navbar-brand">
              <ul className="navbar-nav me-auto py-1 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    role="button"
                    className="nav-link dropdown-toggle"
                  >
                    <Image
                      src={LOGO_BRAZIL}
                      alt="Opportunity Logo"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </span>

            <span className="navbar-brand lh-1 text-center">
              <Link
                className="text-decoration-none text-break fs-6 lh-1"
                href="/login"
                style={{ color: "#37406D" }}
              >
                <small>
                  Entrar ou
                  <br />
                  cadastrar
                </small>
              </Link>
            </span>
          </div>

          <Menu show={show} handleClose={handleClose} />

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
