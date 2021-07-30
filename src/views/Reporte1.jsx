import React, { Component } from "react";

class Reporte1 extends Component {
  state = {
    listaRegistro: [],
    gastos: [],
    costos: [],
    caja: [],
  };

  async peticion() {
    let peticion = await fetch("http://localhost:4000/registros/");
    let response = await peticion.json();
    // envia el valor de response al stado listaRegistro
    this.setState({ listaRegistro: response.data });
    console.log(response);
    // areglos auxiliares para guardar respuestas la informacion en el stado
    let gastos = [], costos = [];
    // se extrae del array la informacion para la grafica, por cada elemento que encuentre
    // this.state.respuesta.map((elemento) => {});
  }

  async componentDidMount() {
    this.peticion();
  }

  render() {
    return <div></div>;
  }
}
export default Reporte1;
