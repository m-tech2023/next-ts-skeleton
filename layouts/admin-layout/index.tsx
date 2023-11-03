import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminLayout = ({ children }) => {
  return (
    <div className="AppAdmin">
      <div className="headerAdmin">
        <span>Cadastro de Usuários</span> 
      <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faCaretDown} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <div className="container-fluid container-admin">
        {/* <aside className="drawer">Drawer</aside> */}
        <main className="mainAdmin">{children}</main>
      </div>
      {/* <div className="footer">Footer</div> */}
    </div>
  );
};

export default AdminLayout;
