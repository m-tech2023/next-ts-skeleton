import styles from "./styles.module.scss";

function CardContato() {
  return (
    <div className="container mb-5">
      <h2 className="fw-bolder mt-5 mb-4">Nossos Contatos</h2>
      <div className="card shadow border-0">
        <ul className="list-group list-group-flush">
          <li className={`${styles.customBgLight} list-group-item p-3`}>
            <p>
              <i className="bi bi-telephone-fill"></i> (11) 4858-5115
              (Escritório)
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> (15) 98177-4112 (Carlos
              Santana)
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> (11) 99669-9022 (Freitas
              Neto)
            </p>
          </li>
          <li className={`${styles.customBgLight} list-group-item p-3`}>
            <div className={styles.contact_email}>
              <i className="bi bi-envelope"></i>
              contato@opportunityleiloes.com.br
            </div>
          </li>
          <li className={`${styles.customBgLight} list-group-item`}>
            <ul className="list-group d-flex flex-row justify-content-around mt-2">
              <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
                <i className="bi bi-instagram me-2"></i>Instagram
              </li>
              <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
                <i className="bi bi-youtube me-2"></i>Youtube
              </li>
              <li className="list-group-item border border-0 bg-transparent d-flex align-items-center">
                <i className="bi bi-facebook me-2"></i>Facebook
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardContato;
