import Reporte from "./components/views/Reporte.jsx";
import CreateCategoria from "./components/views/create-categoria.component.jsx";
import CategoriaList from "./components/views/categoria-list.component.jsx";
import CreateRegistro from "./components/views/create-registro.component.jsx";
import RegistroList from "./components/views/registro-list.component.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";


const Routes = [
  {
    path: "/Login/",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    layout: "",
    // exact: true,
  },
  {
    path: "/Register/",
    name: "Register",
    icon: "nc-icon nc-chart-pie-35",
    component: Register,
    layout: "",
    // exact: true,
  },
  {
    path: "/reporte/",
    name: "Ver Reporte",
    icon: "nc-icon nc-chart-pie-35",
    component: Reporte,
    layout: "",
    // exact: true,
  },
  {
    path: "/registros/add",
    name: "Agregar Registro",
    icon: "nc-icon nc-bank",
    component: CreateRegistro,
    layout: "",
    // exact: true,
  },

  {
    path: "/registros/",
    name: "Ver Registros",
    icon: "nc-icon nc-bullet-list-67",
    component: RegistroList,
    layout: "",
    // exact: true,
  },
  {
    path: "/categorias/add",
    name: "Agregar Categoría",
    icon: "nc-icon nc-notes",
    component: CreateCategoria,
    layout: "",
    // exact: true,
  },

  {
    path: "/categorias/",
    name: "Ver Categorías",
    icon: "nc-icon nc-bullet-list-67",
    component: CategoriaList,
    layout: "",
    // exact: true,
  },
];

export default Routes;
