import React from "react";
import { useLocation, NavLink } from "react-router-dom";

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
          <div className="nav-link2">Inicio</div>
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
            <i className="nc-icon nc-app"></i> Cerar Sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


// import React from "react";
// import { Layout, Menu, Divider } from "antd";
// import {
//   UnorderedListOutlined,
//   DollarOutlined,
//   PieChartOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// function Sidebar() {
//   const { Sider } = Layout;
//   const { SubMenu } = Menu;

//   return (
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={(broken) => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <Divider style={{ color: "#d8d8d8" }} orientation="left">
//         Inicio
//       </Divider>

//       <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
        
//         <SubMenu key="sub2" icon={<DollarOutlined />} title="Movimientos">
//           <Menu.Item key="list-movimiento">
//             <Link to="/registros/">Lista de registros</Link>
//           </Menu.Item>
//           <Menu.Item key="add-movimiento">
//             <Link to="/registros/add">Agregar registros</Link>
//           </Menu.Item>
//         </SubMenu>
//         <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Categorías">
//           <Menu.Item key="list-categoria">
//             <Link to="/categorias/">Lista de categorías</Link>
//           </Menu.Item>
//           <Menu.Item key="add-categoria">
//             <Link to="/categorias/add">Agregar categoría</Link>
//           </Menu.Item>
//         </SubMenu>
      
//         <Menu.Item key="3" icon={<PieChartOutlined />}>
//           <Link to="/reporte">Ver reportes</Link>
//         </Menu.Item>
//         <Menu.Item key="4" icon={<LogoutOutlined />}>
//           <Link to="/"> Cerrar sesión</Link>
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// }

// export default Sidebar;
