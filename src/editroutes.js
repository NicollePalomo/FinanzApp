import EditCategoria from "./views/edit-categoria.component.jsx";
import EditRegistro from "./views/edit-registro.component.jsx";

const EditRoutes = [
  {
    path: "/registros/edit-registro/:id",
    name: "Editar Registro",
    icon: "nc-icon nc-bank",
    component: EditRegistro,
    layout: "",
    // exact: true,
  },
  {
    path: "/categorias/edit-categoria/:id",
    name: "Editar Categoría",
    icon: "nc-icon nc-notes",
    component: EditCategoria,
    layout: "",
    // exact: true,
  },
];

export default EditRoutes;
