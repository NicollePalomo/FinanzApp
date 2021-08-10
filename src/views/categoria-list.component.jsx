// Componente para gestión de categorías

import React, { Component } from "react";
import {  Card, Table, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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


