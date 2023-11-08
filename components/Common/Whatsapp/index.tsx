import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import send from "@/public/whatsapp-send.png";
import logo from "@/public/opportunity-icon.png";
import Input from "../Input";
import Image from "next/image";
import { InputMask } from "primereact/inputmask";
import Link from "next/link";

const Whatsapp = () => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [showBalloon1, setShowBalloon1] = useState(false);
  const [showBalloon2, setShowBalloon2] = useState(false);
  const [showBalloon3, setShowBalloon3] = useState(false);

  const handleWhatsapp = () => {
    if (!open) {
      setTimeout(() => {
        setShowBalloon1(true);
      }, 1000);
      setTimeout(() => {
        setShowBalloon2(true);
      }, 2000);
      setTimeout(() => {
        setShowBalloon3(true);
      }, 3000);
    } else {
      setShowBalloon1(false);
      setShowBalloon2(false);
      setShowBalloon3(false);
    }
    setOpen(!open);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentDate(`${hours}:${minutes}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link
          href={"https://www.instagram.com/opportunityleiloes_qm_ph/"}
          target="_blank"
        >
          <div className={styles.container_instagram}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </div>
        </Link>
        <div className={styles.container_whats} onClick={handleWhatsapp}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          <p className={styles.pulse}>1</p>
        </div>
      </div>
      <div className={`${styles.window_whatsapp} ${open ? "" : styles.close}`}>
        <div className={styles.container_header}>
          <div className={styles.container_logo}>
            <Image
              src={logo}
              alt=""
              width={50}
              height={50}
              className={styles.logo}
            />
            <p className={styles.title}>Opportunity Leilões</p>
          </div>
          <FontAwesomeIcon
            icon={faX}
            className={styles.close_btn}
            onClick={handleWhatsapp}
          ></FontAwesomeIcon>
        </div>
        <div className={styles.container_content}>
          {showBalloon1 && (
            <div className={styles.balloon}>
              <p className={styles.title}>Olá, Como vai?</p>
              <span className={styles.date}>{currentDate}</span>
            </div>
          )}
          {showBalloon2 && (
            <div className={styles.balloon}>
              <p className={styles.title}>
                Estamos disponíveis para mais informações
              </p>
              <span className={styles.date}>{currentDate}</span>
            </div>
          )}
          {showBalloon3 && (
            <div className={styles.balloon}>
              <p className={styles.title}>Entre em contato via whatsapp</p>
              <span className={styles.date}>{currentDate}</span>
            </div>
          )}
        </div>
        <div className={styles.container_footer}>
          <Input
            className={styles.input}
            id="name"
            name="name"
            placeholder="Nome"
          ></Input>
          <InputMask
            mask="(99) 999-9999"
            className={styles.input}
            id="tel"
            name="tel"
            placeholder="(DD)0000-0000"
          ></InputMask>
          <Image
            src={send}
            alt=""
            width={50}
            height={50}
            className={styles.send}
          ></Image>
        </div>
      </div>
    </>
  );
};
export default Whatsapp;
