import styles from './styles.module.scss';

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" style={{ backgroundColor: '#37406d' }}>
              <button
                className="accordion-button collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Mapa do site
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: '#2C3357' }}
            >
              <div className="accordion-body">
                <ul className="list-group">
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0 border-top-0">
                    Home
                  </li>
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                    Leilões
                  </li>
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                    Venda seu Cavalo
                  </li>
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                    Notícias
                  </li>
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0">
                    Sobre
                  </li>
                  <li className="list-group-item bg-transparent text-white border border-end-0 border-start-0 border-bottom-0">
                    Contato
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Contatos
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: '#2C3357' }}
            >
              <div className="accordion-body">
                <p className="text-white">(11) 4858-5115 (Escritório)</p>
                <p className="text-white">(15) 98177-4112 (Carlos Santana)</p>
                <p className="text-white">(11) 99669-9022 (Freitas Neto)</p>
                <p className="text-white">contato@opportunityleiloes.com.br</p>
                <p className="text-white">-</p>
                <p className="text-white">
                  Rua Fradique Coutinho 50 - 3º Andar - Cj 32 Pinheiros - São
                  Paulo/SP - CEP 05416-010 |{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <ul className="list-group d-flex flex-row justify-content-around mt-2">
            <li className="list-group-item border border-0 bg-transparent text-white d-flex align-items-center">
              <i className="bi bi-instagram me-2"> </i>Intagram
            </li>
            <li className="list-group-item text-white border border-0 bg-transparent d-flex align-items-center">
              <i className="bi bi-youtube me-2"> </i>Youtube
            </li>
            <li className="list-group-item text-white border border-0 bg-transparent d-flex align-items-center">
              <i className="bi bi-facebook me-2"> </i>Facebook
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.footerInfo} px-4 py-3` }>
        <h6>Opportunity Organizacão de Leilões Eireli</h6>
        <p>CNPJ 33.034.852/0001-59</p>
        <p className={styles.footerInfoItalico}>© 2023 - Todos direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
