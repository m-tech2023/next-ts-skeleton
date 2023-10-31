import Image from "next/image";

import BRA from '@/public/icon/brazil.svg';
import EUA from '@/public/icon/eua.svg';
import SPA from '@/public/icon/spa.svg';

function Modal() {
  return (
    <div className="modal fade rounded-0" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered rounded-0">
        <div className="modal-content rounded-0">
          <div className="modal-header rounded-0" style={{ backgroundColor: '#37406d', color: '#fff' }}>
            <h5 className="modal-title">Idioma/Language</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              <li className="list-group-item py-3 border-end-0 border-start-0 border-top-0">
                <Image src={BRA} width={32} height={32} className="me-3" alt="Português" />Português
              </li>
              <li className="list-group-item py-3 border-end-0 border-start-0">
                <Image src={EUA} width={32} height={32} className="me-3" alt="English" />English
              </li>
              <li className="list-group-item py-3 border-end-0 border-start-0 border-bottom-0 ">
                <Image src={SPA} width={32} height={32} className="me-3" alt="Espanõl" />Espanõl
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
