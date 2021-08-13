import React from "react";
import {  NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

// import logo from "../../assets/img/finanzapp.png";

function Sidebar({ routes }) {
  // const location = useLocation();
  // const activeRoute = (routeName) => {
  //   return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          {/* logo */}
          <a href="/#" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src={require("../../assets/img/finanzapp.png").default} alt="..." />
            </div>
          </a>
          {/* nombre logo */}
          <spam className="nav-link">FinanzApp</spam>
        </div>

        <Nav>
          <div className="nav-link2 ">Inicio</div>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  // className={
                  //   prop.upgrade ? "active active-pro" : activeRoute( prop.path)
                  // }
                  key={key}>
                  {/* links de las vistas */}
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active">
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>

        <div className="cerrarSesion">
          <a href="/#">
            <i className="nc-icon nc-app"></i> Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

