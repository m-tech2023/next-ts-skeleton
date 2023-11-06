// import Head from "next/head";
// import Link from "next/link";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'
import AdminLayout from '@/layouts/admin-layout';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <div className="p-3">
        <form>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="email" className="form-control adminForm" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label className="form-label">Sobrenome</label>
            <input type="email" className="form-control adminForm" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label className="form-label">Tipo</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Administrador</option>
              <option value="1">Gestor</option>
              <option value="2">Cliente</option>
              <option value="3">Vendedor</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control adminForm" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input " id="exampleCheck1" />
            <label className="form-check-label">Senha bloqueada</label>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input " id="exampleCheck1" />
            <label className="form-check-label">Usuário bloqueado</label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
      </AdminLayout>
  );
}

export default Page;
