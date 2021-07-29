import React, { Component } from "react";

import {  Card, Table, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "axios";
import RegistroTable from "./registro-table.jsx";

export default class RegistroList extends Component {
    constructor(props) {
      super(props);
      this.state = { registros: [] };
      // this.deleteCategoria = this.deleteCategoria.bind(this);
    }
    componentDidMount() {
      axios
        .get("http://localhost:4000/registros/")
        .then((response) => {
          console.log("peticion enviada");
          this.setState({ registros: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    registroList() { 
      return this.state.registros.map(function (currentCategoria, i) {
        return <RegistroTable reg={currentCategoria} key={i} />;
      });
    }
  
    render() {
      return (
        <div>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Mis Registros</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Tipo de Registro</th>
                      <th className="border-0">Categoría</th>
                      <th className="border-0">Monto</th>
                      <th className="border-0">Fecha</th>
                      <th className="border-0">Notas</th>
                      <th className="border-0">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>{this.registroList()}</tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </div>
      );
    }
  }