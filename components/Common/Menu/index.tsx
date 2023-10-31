import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './styles.module.scss';

import LOGO_SEARCH from '@/public/icon/normal_search_icon.svg';
import Image from 'next/image';

function Menu({ show, handleClose }) {
  return (
    <>
      <Offcanvas className={styles.header} show={show} onHide={handleClose}>
        <Offcanvas.Header className={styles.link} closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='px-0'>
          <div className="input-group p-2">
            <Form.Control
              type="string"
              className="border-end-0 p-3 shadow-none"
              placeholder="Procure por leilão, lote, raça ou código"
            />
            <span className="input-group-text bg-white border-end-0 border-start-0">
              <Image src={LOGO_SEARCH} alt="Search Icon" />
            </span>
          </div>

          <ListGroup className={styles.links} variant="flush">
            <ListGroup.Item className={styles.link} action href="#link1">
              Home <i className="bi bi-chevron-right" />
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Leilões <i className="bi bi-chevron-right" />
              </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Venda seu cavalo <i className="bi bi-chevron-right" />
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Noticias <i className="bi bi-chevron-right" />
              </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Sobre <i className="bi bi-chevron-right" />
            </ListGroup.Item>
            <ListGroup.Item className={styles.link}>
              Contato <i className="bi bi-chevron-right" />
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
