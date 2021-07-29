// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";


import Sidebar from "./views/components/Sidebar.jsx";
// import Registro from "./views/Registro.jsx";

import AdminNavbar from "./views/components/AdminNavbar.jsx";
import routes from "./routes";
import EditRoutes from "./editroutes";

function App() {
  // const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          
        exact path={prop.layout + prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
          
        />
      );
    });
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}
            {getRoutes(EditRoutes)}</Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
