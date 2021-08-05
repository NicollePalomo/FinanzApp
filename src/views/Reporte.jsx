import React, { Component } from "react";
import axios from "axios";
import ChartistGraph from "react-chartist";
// react-bootstrap components
<<<<<<< HEAD
import { Card, Container, Row, Col } from "react-bootstrap";
=======
import { Card, Button, Container, Row, Col } from "react-bootstrap";
>>>>>>> origin/back

export default class Reporte extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      egresoTotal: 0,
      ingresoTotal: 0,
      listaRegistro: [],
      ingresoFiltrado: [],
      egresoFiltrado: [],
    };
=======
      egresoTotal: [],
      ingresoTotal: [],
      listaRegistro: [],
      ingresoState: "Ingreso",
      gastoState: "Gasto",
    };
    // this.listaIngresos = this.listaIngresos.bind(this);
>>>>>>> origin/back
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/registros/")
      .then((response) => {
<<<<<<< HEAD
        // envia el valor de response al stado listaRegistro
        this.setState({ listaRegistro: response.data });
=======
        console.log("response");
        this.setState({ listaRegistro: response.data });
        console.log(this.state.listaRegistro);
>>>>>>> origin/back
      })
      .catch(function (error) {
        console.log(error);
      });
  }

<<<<<<< HEAD
  listaIngresos() {
    //  funcion  que obtiene los registros "ingresos" y se guarda en otra variable para tener el code mas claro
    const resultFilter = (filtrado) => filtrado.tipoRegistro === "Ingreso";
    // funcion  filtrar
    const ingresoFiltrado = this.state.listaRegistro.filter(resultFilter);
    /*retorno de la funcion filtrar, se le aplica map para obtener el valor del monto y se le palica reduce 
    para sumar los valores del nuevo array*/
    return ingresoFiltrado.map((elem) => elem.monto).reduce((sum, value) => sum + value, 0);
  }

  listaEgresos() {
    //  funcion  que obtiene los registros "ingresos" y se guarda en otra variable para tener el code mas claro
    const resultFilter = (filtrado) => filtrado.tipoRegistro === "Gasto";
    // funcion  filtrar
    const egresoFiltrado = this.state.listaRegistro.filter(resultFilter);
    /*retorno de la funcion filtrar, se le aplica map para obtener el valor del monto y se le palica reduce 
    para sumar los valores del nuevo array*/
    return egresoFiltrado.map((elem) => elem.monto).reduce((sum, value) => sum + value, 0);
  }

  cajaRestante() {
    return this.listaIngresos() - this.listaEgresos();
  }

  // listaIngresosCategoria() {
  //   //  funcion  que obtiene los registros "ingresos" y se guarda en otra variable para tener el code mas claro
  //   const resultFilter = (filtrado) =>
  //     filtrado.tipoRegistro === "Ingreso" && filtrado.categoria === "Compañia SASS";
  //   // funcion  filtrar
  //   const ingresoFiltrado = this.state.listaRegistro.filter(resultFilter);

  //   /*retorno de la funcion filtrar, se le aplica map para obtener el valor del monto y se le palica reduce
  //   para sumar los valores del nuevo array*/
  //   console.log(ingresoFiltrado);
  //   return ingresoFiltrado.map((elem) => elem.monto).reduce((sum, value) => sum + value, 0);
  // }

=======
  listarIngresos() {
    var filteredList = this.state.listaRegistro.filter((item) => {
      return item.tipoRegistro === this.state.ingresoState;
    });
    // var suma = 0;
    // var ingresos = [];
    // var i = 1;
    // return filteredList.map((categ, i) => {
    //   suma+=categ.monto;
    //   ingresos[i]=suma
    //   i++;
    //   return <p>{ingresos[ingresos.]}</p>;
    // });
  }

>>>>>>> origin/back
  render() {
    return (
      <div>
        <Container>
          {/* tarjetas ingreso, egreso, caja */}
          <Row>
            {/* ingresos */}
            <Col lg="4" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>

                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Ingresos</p>
<<<<<<< HEAD

                        <Card.Title as="h4">$ {this.listaIngresos()}</Card.Title>
=======
                        {this.listarIngresos()}
                        <Button></Button>
                        {/* {this.listaIngresos()} */}
                        <Card.Title as="h4">$ 1,345</Card.Title>
>>>>>>> origin/back
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* egresos */}
            <Col lg="4" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-light-3 text-success"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Egresos</p>
<<<<<<< HEAD
                        <Card.Title as="h4">$ {this.listaEgresos()}</Card.Title>
=======
                        <Card.Title as="h4">$ 1,345</Card.Title>
>>>>>>> origin/back
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* caja */}
            <Col lg="4" sm="12">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Caja</p>
<<<<<<< HEAD
                        <Card.Title as="h4">$ {this.cajaRestante()}</Card.Title>
=======
                        <Card.Title as="h4">$ 1,345</Card.Title>
>>>>>>> origin/back
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* Ingresos */}
            <Col md="6">
              <Card>
                <Card.Header>
                  <Card.Title as="h3">Ingresos</Card.Title>
                  <p className="card-category">
                    Representacion grafica de los ingresos a la fecha.
                  </p>
                </Card.Header>

                <Card.Body>
                  <div className="ct-chart" id="chartPreferences">
                    <ChartistGraph
                      data={{
                        labels: ["50%", "10%", "40%"],
<<<<<<< HEAD
                        series: [50, 30, 40, 12, 90],
=======
                        series: [50, 10, 40],
>>>>>>> origin/back
                      }}
                      type="Pie"
                    />
                  </div>
                  {/* leyenda */}
                  <div className="legend text-center">
                    <i className="fas fa-circle text-info"></i>
                    <spam className="mr-2">Company</spam>
                    <i className="fas fa-circle text-danger"></i>
                    <spam className="mr-2">Charlez</spam>
                    <i className="fas fa-circle text-warning"></i>
                    <spam className="mr-2">TToTo</spam>
                  </div>
                  {/* <hr></hr>
                <div className="stats text-center">
                  <i className="far fa-clock"></i>
                  Actualizado hasta la fecha
                </div> */}
                </Card.Body>
              </Card>
            </Col>

            {/* Egresos */}
            <Col md="6">
              <Card>
                <Card.Header>
                  <Card.Title as="h3">Egresos</Card.Title>
                  <p className="card-category">
                    Representacion grafica de los egresos a la fecha
                  </p>
                </Card.Header>

                <Card.Body>
                  <div className="ct-chart" id="chartPreferences">
                    <ChartistGraph
                      data={{
                        labels: ["40%", "20%", "40%"],
                        series: [40, 20, 40],
                      }}
                      type="Pie"
                    />
                  </div>

                  {/* leyenda */}
                  <div className="legend text-center">
                    <i className="fas fa-circle text-info"></i>
                    <spam className="mr-2">Servicios</spam>
                    <i className="fas fa-circle text-danger"></i>
                    <spam className="mr-2">Pelis</spam>
                    <i className="fas fa-circle text-warning"></i>
                    <spam className="mr-2">Comida</spam>
                  </div>

                  {/* <hr></hr>
                <div className="stats text-center">
                  <i className="far fa-clock"></i>
                  Actualizado hasta la fecha
                </div> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
<<<<<<< HEAD
=======

// import React from "react";
// import ChartistGraph from "react-chartist";
// // react-bootstrap components
// import {
//   Card,
//   Container,
//   Row,
//   Col,

// } from "react-bootstrap";

// function Reporte() {
//   return (
//     <>
//       <Container>
//         {/* tarjetas ingreso, egreso, caja */}
//         <Row>
//           {/* ingresos */}
//           <Col lg="4" sm="6">
//             <Card className="card-stats">
//               <Card.Body>
//                 <Row>
//                   <Col xs="5">
//                     <div className="icon-big text-center icon-warning">
//                       <i className="nc-icon nc-chart text-warning"></i>
//                     </div>
//                   </Col>

//                   <Col xs="7">
//                     <div className="numbers">
//                       <p className="card-category">Ingresos</p>
//                       <Card.Title as="h4">$ 1,345</Card.Title>
//                     </div>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* egresos */}
//           <Col lg="4" sm="6">
//             <Card className="card-stats">
//               <Card.Body>
//                 <Row>
//                   <Col xs="5">
//                     <div className="icon-big text-center icon-warning">
//                       <i className="nc-icon nc-light-3 text-success"></i>
//                     </div>
//                   </Col>
//                   <Col xs="7">
//                     <div className="numbers">
//                       <p className="card-category">Egresos</p>
//                       <Card.Title as="h4">$ 1,345</Card.Title>
//                     </div>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* caja */}
//           <Col lg="4" sm="12">
//             <Card className="card-stats">
//               <Card.Body>
//                 <Row>
//                   <Col xs="5">
//                     <div className="icon-big text-center icon-warning">
//                       <i className="nc-icon nc-vector text-danger"></i>
//                     </div>
//                   </Col>
//                   <Col xs="7">
//                     <div className="numbers">
//                       <p className="card-category">Caja</p>
//                       <Card.Title as="h4">$ 1,345</Card.Title>
//                     </div>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           {/* Ingresos */}
//           <Col md="6">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h3">Ingresos</Card.Title>
//                 <p className="card-category">
//                   Representacion grafica de los ingresos a la fecha.
//                 </p>
//               </Card.Header>

//               <Card.Body>
//                 <div className="ct-chart" id="chartPreferences">
//                   <ChartistGraph
//                     data={{
//                       labels: ["50%", "10%", "40%"],
//                       series: [50, 10, 40],
//                     }}
//                     type="Pie"
//                   />
//                 </div>
//                 {/* leyenda */}
//                 <div className="legend text-center">
//                   <i className="fas fa-circle text-info"></i>
//                   <spam className="mr-2">Company</spam>
//                   <i className="fas fa-circle text-danger"></i>
//                   <spam className="mr-2">Charlez</spam>
//                   <i className="fas fa-circle text-warning"></i>
//                   <spam className="mr-2">TToTo</spam>
//                 </div>
//                 {/* <hr></hr>
//                 <div className="stats text-center">
//                   <i className="far fa-clock"></i>
//                   Actualizado hasta la fecha
//                 </div> */}
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Egresos */}
//           <Col md="6">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h3">Egresos</Card.Title>
//                 <p className="card-category">
//                   Representacion grafica de los egresos a la fecha
//                 </p>
//               </Card.Header>

//               <Card.Body>
//                 <div className="ct-chart" id="chartPreferences">
//                   <ChartistGraph
//                     data={{
//                       labels: ["40%", "20%", "40%"],
//                       series: [40, 20, 40],
//                     }}
//                     type="Pie"
//                   />
//                 </div>

//                 {/* leyenda */}
//                 <div className="legend text-center">
//                   <i className="fas fa-circle text-info"></i>
//                   <spam className="mr-2">Servicios</spam>
//                   <i className="fas fa-circle text-danger"></i>
//                   <spam className="mr-2">Pelis</spam>
//                   <i className="fas fa-circle text-warning"></i>
//                   <spam className="mr-2">Comida</spam>
//                 </div>

//                 {/* <hr></hr>
//                 <div className="stats text-center">
//                   <i className="far fa-clock"></i>
//                   Actualizado hasta la fecha
//                 </div> */}
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Reporte;
>>>>>>> origin/back
