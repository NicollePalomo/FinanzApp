// Componente para gestión de categorías

import React, { Component } from "react";

import {  Card, Table, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";
import CategoriaTable from "./categoria-table.jsx";

// const Categoria = (props) => (
//   <tr>
//     <td>{props.categ.tipoRegistro}</td>
//     <td>{props.categ.categoria}</td>
//     <td>
//       <Link to={"/categoria/edit/" + props.categ._id}>{"Editar"}</Link>
//     </td>
//     <td>
//       {/* <Button onClick={this.deleteCategoria} size="sm" variant="danger"> */}
//       {"Delete"}
//       {/* </Button> */}
//     </td>
//   </tr>
// );

export default class CategoriaList extends Component {
  constructor(props) {
    super(props);
    this.state = { categorias: [] };
    // this.deleteCategoria = this.deleteCategoria.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/categorias/")
      .then((response) => {
        console.log("peticion enviada");
        this.setState({ categorias: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  categoriaList() { 
    return this.state.categorias.map(function (currentCategoria, i) {
      return <CategoriaTable categ={currentCategoria} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Col md="12">
          <Card className="card-plain table-plain-bg">
            <Card.Header>
              <Card.Title as="h4">Mis Categorías</Card.Title>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover">
                <thead>
                  <tr>
                    <th className="border-0">Tipo de Registro</th>
                    <th className="border-0">Categoría</th>
                    <th className="border-0">Acciones</th>
                  </tr>
                </thead>
                <tbody>{this.categoriaList()}</tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

// const Categoria = () => {
//   const { Column } = Table;
//   const [form] = Form.useForm();

//   const [categoria, setCategoria] = useState("");
//   const [listaCategorias, setlistaCategorias] = useState([]);
//   const [tipoRegistro, setTipoRegistro] = useState("Gasto");
//   const [modoEdicion, setModoEdicion] = useState(false);
//   const [id, setId] = useState("");
//   const [error, setError] = useState(null);

//   const onChangeTipoRegistro = (e) => {
//     console.log("Tipo de movimiento escogido", e.target.value);
//     setTipoRegistro(e.target.value);
//   };

//   const addCategoria = (e) => {
//     // e.preventDefault();
//     // setlistaCategorias(nombre)
//     // if (!categoria.trim()) {
//     //   // console.log("El campo categoria esta vacio")
//     //   setError("El campo categoría esta vacio");
//     //   return;
//     // }
//     const nuevaCategoria = {
//       id: uniqid(),
//       tipoRegistro: e.tipoRegistro,
//       categoria: e.categoria,
//     };
//     console.log(setlistaCategorias);
//     setlistaCategorias([...listaCategorias, nuevaCategoria]);
//     setCategoria("");
//     setError(null);
//   };

//   const deleteCategoria = (id) => {
//     const nuevaArray = listaCategorias.filter((item) => item.id !== id);

//     setlistaCategorias(nuevaArray);
//   };

//   const editar = (item) => {
//     setModoEdicion(true);

//     setCategoria(item.categoria);
//     setTipoRegistro(item.tipoRegistro);
//     setId(item.id);
//     form.setFieldsValue({
//       id: id,
//       categoria: item.categoria,
//       tipoRegistro: item.tipoRegistro,
//     });
//   };

//   const editarCategoria = (e) => {
//     // e.preventDefault();

//     const nuevoArray = listaCategorias.map((item) =>
//       item.id === id
//         ? { id: id, categoria: categoria, tipoRegistro: tipoRegistro }
//         : item
//     );

//     setlistaCategorias(nuevoArray);
//     setModoEdicion(false);
//     setCategoria(" ");
//   };

//   const onFinish = (values) => {
//     console.log(typeof values);
//     console.log("Received values of form: ", values.tipoRegistro);
//     // setTipoRegistro(values.tipoRegistro);
//     // setCategoria(values.categoria)
//     // addCategoria(values);
//     form.resetFields();

//     if (modoEdicion) {
//       editarCategoria(values);
//     } else {
//       addCategoria(values);
//     }
//   };
//   console.log(listaCategorias);
//   return (
//     <div className="container">
//       <Divider orientation="left">Gestion de categorías</Divider>
//       <div className="col">
//         <div className="row">
//           <div className="col">
//             <Divider orientation="left">Nueva categoría</Divider>

//             <Form
//               form={form}
//               name="nuevaCategoria"
//               onFinish={onFinish}
//               labelCol={{ span: 8 }}
//               wrapperCol={{ span: 10 }}
//               // onFinish={modoEdicion ? editarCategoria : addCategoria}
//             >
//               <Form.Item
//                 name="tipoRegistro"
//                 label="Tipo de registro"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Por favor ingrese el tipo de registro",
//                   },
//                 ]}
//               >
//                 <Radio.Group
//                   onChange={onChangeTipoRegistro}
//                   value={tipoRegistro}
//                   // defaultValue={"Gasto"}
//                 >
//                   <Radio value={"Gasto"}> Gasto </Radio>
//                   <Radio value={"Ingreso"}> Ingreso </Radio>
//                 </Radio.Group>
//               </Form.Item>

//               <Form.Item
//                 name="categoria"
//                 label="Categoría"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Por favor ingrese la categoría",
//                   },
//                 ]}
//               >
//                 <Input
//                   placeholder="Ingrese la nueva categoría"
//                   onChange={(e) => {
//                     setCategoria(e.target.value);
//                   }}
//                 />
//               </Form.Item>

//               <Button type="primary" htmlType="submit">
//                 {modoEdicion ? "Editar categoría" : "Registrar categoría"}
//               </Button>
//             </Form>

//             <div className="col">
//               <Divider orientation="left">Mis categorías</Divider>
//               <Table
//                 name="listaCategorias"
//                 size="small"
//                 dataSource={listaCategorias}
//               >
//                 <Column
//                   title="Tipo de registro"
//                   dataIndex="tipoRegistro"
//                   key="tipoRegistro"
//                   // responsive= 'md'
//                 />
//                 <Column
//                   title="Categoría"
//                   dataIndex="categoria"
//                   key="categoria"
//                   // responsive= 'md'
//                 />

//                 <Column
//                   title="Acciones"
//                   key="action"
//                   // responsive= 'md'
//                   render={(item) => (
//                     <Space size="middle">
//                       <Button
//                         type="primary"
//                         onClick={() => {
//                           editar(item);
//                         }}
//                       >
//                         Editar
//                       </Button>
//                       <Button
//                         type="primary"
//                         danger
//                         onClick={() => {
//                           deleteCategoria(item.id);
//                         }}
//                       >
//                         Eliminar
//                       </Button>
//                     </Space>
//                   )}
//                 />
//               </Table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categoria;
