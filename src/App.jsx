//import logo from "./logo.svg";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./views/components/Sidebar.jsx";
import AdminNavbar from "./views/components/AdminNavbar.jsx";
import routes from "./routes";
import EditRoutes from "./editroutes";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";

function App() {
//  const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          exact
          path={prop.layout + prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Sidebar routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>
              {getRoutes(routes)}
              {getRoutes(EditRoutes)}
            </Switch>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
