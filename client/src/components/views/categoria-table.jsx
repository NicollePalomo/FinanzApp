import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class CategoriaTable extends Component {
  constructor(props) {
    super(props);
    this.deleteCategoria = this.deleteCategoria.bind(this);
  }

  deleteCategoria(e) {
    e.preventDefault();
    axios
      .delete(
        "http://localhost:4000/categorias/" +
          this.props.categ._id
      )
      .then((res) => {
        console.log("Categoria successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });

   
      
  }

  render() {
    return (
      <tr>
        <td>{this.props.categ.tipoRegistro}</td>
        <td>{this.props.categ.categoria}</td>
        <td>
          <Button size="sm" variant="primary">
            <Link to={"/categorias/edit-categoria/" + this.props.categ._id}>Edit</Link>
          </Button>
          <Button onClick={this.deleteCategoria} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
