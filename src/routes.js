// import Dashboard from "./views/Dashboard.jsx";
// import Movement from "./views/Movement.jsx";
// import Category from "./views/Category.jsx";
import CreateCategoria from "./views/create-categoria.component.jsx";
// import EditCategoria from "./views/edit-categoria.component.jsx";
import CategoriaList from "./views/categoria-list.component.jsx";
import CreateRegistro from "./views/create-registro.component.jsx";
// import EditRegistro from "./views/edit-registro.component.jsx";
import RegistroList from "./views/registro-list.component.jsx";
import Reporte from "./views/Reporte.jsx";

const Routes = [
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
  {
    path: "/reporte/",
    name: "Ver Reporte",
    icon: "nc-icon nc-chart-pie-35",
    component: Reporte,
    layout: "",
    // exact: true,
  }
];

export default Routes;
