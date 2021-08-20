import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Reporte from "./components/views/Reporte.jsx";
import CreateCategoria from "./components/views/create-categoria.component.jsx";
import CategoriaList from "./components/views/categoria-list.component.jsx";
import CreateRegistro from "./components/views/create-registro.component.jsx";
import RegistroList from "./components/views/registro-list.component.jsx";
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./components/layouts/Sidebar.jsx";
import AdminNavbar from "./components/layouts/AdminNavbar.jsx";
import routes from "./routes";
import { Component } from "react";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AuthRoutes from "authroutes";
import EditCategoria from "./components/views/edit-categoria.component.jsx";
import EditRegistro from "./components/views/edit-registro.component.jsx";
// import Register from "./auth/Register.jsx";
// import Login from "./auth/Login.jsx";
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  // const location = useLocation();
  // mainPanel = React.useRef(null);

  getRoutes = (routes) => {
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
  // getPrivateRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     return (
  //       <PrivateRoute
  //         exact
  //         path={prop.layout + prop.path}
  //         render={(props) => <prop.component {...props} />}
  //         key={key}
  //       />
  //     );
  //   });
  // };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div classname="App">
            <div className="wrapper">
              <Sidebar routes={routes} />
              <div className="main-panel">
                <AdminNavbar />
                <div className="content">
                  <Switch>{this.getRoutes(AuthRoutes)}</Switch>
                  <Switch>
                    <PrivateRoute exact path="/reporte" component={Reporte} />
                    <PrivateRoute exact path="/categorias/add" component={CreateCategoria} />
                    <PrivateRoute exact path="/categorias/" component={CategoriaList} />
                    <PrivateRoute exact path="/registros/add" component={CreateRegistro} />
                    <PrivateRoute exact path="/registros/" component={RegistroList} />
                    <PrivateRoute exact path="/categorias/edit-categoria/:id" component={EditCategoria} />
                    <PrivateRoute exact path="/registros/edit-registro/:id" component={EditRegistro} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
