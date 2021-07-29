import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class RegistroTable extends Component {
  constructor(props) {
    super(props);
    this.deleteRegistro = this.deleteRegistro.bind(this);
    // this.editRegistro = this.editRegistro.bind(this);
    // var myDate = new Date(this.props.reg.fecha);
    // var noTime = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
  }

  deleteRegistro() {
    axios
      .delete(
        "http://localhost:4000/registros/" + this.props.reg._id
      )
      .then((res) => {
        console.log("Registro successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
//   editRegistro(props){
//     <Link as="navlink" to={"/registros/edit-registro/" + this.props.reg._id}>
//         </Link>
//   }

  render() {
    return (
      <tr>
        <td>{this.props.reg.tipoRegistro}</td>
        <td>{this.props.reg.categoria}</td>
        <td>{this.props.reg.monto}</td>
        <td>{this.props.reg.fecha}</td>
        <td>{this.props.reg.notas}</td>
        <td>
          <Button size="sm" variant="primary">
            <Link as="navlink" to={"/registros/edit-registro/" + this.props.reg._id}>
              Edit
            </Link>
          </Button>
          <Button onClick={this.deleteRegistro} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
