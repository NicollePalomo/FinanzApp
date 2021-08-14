import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Nav, Button } from "react-bootstrap";
import { logoutUser } from "../../actions/authActions";
// import { render } from "@testing-library/react";
// import logo from "../../assets/img/finanzapp.png";

class Sidebar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  // const location = useLocation();
  // const activeRoute = (routeName) => {
  //   return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo d-flex align-items-center justify-content-start">
            {/* logo */}
            <a href="/#" className="simple-text logo-mini mx-1">
              <div className="logo-img">
                <img
                  src={require("../../assets/img/finanzapp.png").default}
                  alt="..."
                />
              </div>
            </a>
            {/* nombre logo */}
            <spam className="nav-link">FinanzApp</spam>
          </div>

          <Nav>
            <div className="nav-link2 ">Inicio</div>
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    // className={
                    //   prop.upgrade ? "active active-pro" : activeRoute( prop.path)
                    // }
                    key={key}
                  >
                    {/* links de las vistas */}
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </Nav>

          <div className="cerrarSesion">
            <Button
              onClick={this.onLogoutClick}
              className="m-4 btn-fill text-center"
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Sidebar);
// export default Sidebar;
