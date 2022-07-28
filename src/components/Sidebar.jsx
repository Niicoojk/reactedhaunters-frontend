import React from "react";
import image from '../assets/images/ghost-logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import ListUser from './pages/ListUser';
import ContentWrapper from './ContentWrapper';
import Productos from './pages/Productos';
import NotFound from './NotFound';

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            {<img className="w-50" src={image} alt="Digital House" />}
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - DHaunters</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link to={'/usuarios'} className="nav-link collapsed">
            <i className="fas fa-fw fa-folder"></i>
            <span>Usuarios</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link to={'/productos'} className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Productos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Routes>
        <Route path="/usuarios" element={<ListUser />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/" element={<ContentWrapper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}
export default SideBar;
