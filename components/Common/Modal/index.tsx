import Image from "next/image";
import Close from "@/public/close_lightbox_u96.svg";
import BRA from "@/public/icon/brazil.svg";
import EUA from "@/public/icon/eua.svg";
import SPA from "@/public/icon/spa.svg";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";

export function ModalLang() {
  return (
    <div
      className="modal fade rounded-0"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rounded-0">
        <div className="modal-content rounded-0">
          <div
            className="modal-header rounded-0"
            style={{ backgroundColor: "#37406d", color: "#fff" }}
          >
            <h5 className="modal-title">Idioma/Language</h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Image src={Close} alt="" width={15} height={15} />
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              <li className="list-group-item py-3 border-end-0 border-start-0 border-top-0">
                <Image
                  src={BRA}
                  width={32}
                  height={32}
                  className="me-3"
                  alt="Português"
                />
                Português
              </li>
              <li className="list-group-item py-3 border-end-0 border-start-0">
                <Image
                  src={EUA}
                  width={32}
                  height={32}
                  className="me-3"
                  alt="English"
                />
                English
              </li>
              <li className="list-group-item py-3 border-end-0 border-start-0 border-bottom-0 ">
                <Image
                  src={SPA}
                  width={32}
                  height={32}
                  className="me-3"
                  alt="Espanõl"
                />
                Espanõl
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ModalLogin() {
  return (
    <div
      className="modal fade rounded-0"
      id="modalLogin"
      aria-labelledby="modalLogin"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rounded-0">
        <div className="modal-content rounded-0">
          <div
            className="modal-header rounded-0"
            style={{ backgroundColor: "#37406d", color: "#fff" }}
          >
            <h5 className="modal-title">Login e cadastro</h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0 10px",
              }}
            >
              <Image src={Close} alt="" width={15} height={15} />
            </button>
          </div>
          <div className="modal-body" style={{ padding: "0" }}>
            <ul className="list-group">
              <li
                className="list-group-item py-3 border-end-0 border-start-0 border-top-0"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid black",
                }}
              >
                <a
                  href={"/login"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "5px 0",
                  }}
                >
                  <p data-bs-dismiss="modal" style={{ margin: "0" }}>
                    Entrar
                  </p>
                </a>
                <i className="bi bi-chevron-right" />
              </li>
              <li
                className="list-group-item py-3 border-end-0 border-start-0"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "none",
                }}
              >
                <a
                  href={"/cadastro"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "5px 0",
                  }}
                >
                  <p data-bs-dismiss="modal" style={{ margin: "0" }}>
                    Cadastrar
                  </p>
                </a>
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ModalFilter() {
  return (
    <div
      className="modal fade rounded-0"
      id="modalFilter"
      aria-labelledby="modalFilter"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rounded-0">
        <div className="modal-content rounded-0">
          <div
            className="modal-header rounded-0"
            style={{ backgroundColor: "#37406d", color: "#fff" }}
          >
            <h5 className="modal-title">Filtros</h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0 10px",
              }}
            >
              <Image src={Close} alt="" width={15} height={15} />
            </button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-center align-items-center flex-column w-100">
              <form className="w-100 mb-2">
                <div className="text-left mb-3 w-100">
                  <Label labelFor="order" text="Ordenar por:" />
                  <select className="form-select w-100" name="order" id="order">
                    <option value="date">Data mais próximas</option>
                    <option value="alf">Ordem alfabética</option>
                  </select>
                </div>
                <div className="text-left mb-3 w-100">
                  <Label labelFor="dateFilter" text="Filtrar por mês e ano:" />
                  <Input type="date" id="dateFilter" />
                </div>
                <div className="text-left mb-3 w-100">
                  <Label labelFor="raceFilter" text="Filtrar por raça:" />
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="checkbox"
                        id="race1"
                        name="race"
                        value="raça1"
                      />
                      <label htmlFor="race1">Appaloosa</label>
                      <br />

                      <input
                        type="checkbox"
                        id="race2"
                        name="race"
                        value="raça2"
                      />
                      <label htmlFor="race2">Brasileiro de Hipismo</label>
                      <br />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="checkbox"
                        id="race3"
                        name="race"
                        value="raça3"
                      />
                      <label htmlFor="race3">Paint Horse</label>
                      <br />
                      <input
                        type="checkbox"
                        id="race4"
                        name="race"
                        value="raça4"
                      />
                      <label htmlFor="race4">Quarto de Milha</label>
                      <br />
                    </div>
                  </div>
                </div>
                <Button text="FILTRAR" className="mt-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
