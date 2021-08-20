import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";

const AuthRoutes = [
  {
    path: "/login/",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    layout: "",
    // exact: true,
  },
  {
    path: "/register/",
    name: "Register",
    icon: "nc-icon nc-chart-pie-35",
    component: Register,
    layout: "",
    // exact: true,
  },
];

export default AuthRoutes;
