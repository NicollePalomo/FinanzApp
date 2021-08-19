import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
// import moment from "moment";

// import CurrencyInput from "react-currency-input-field";

export default class CreateCategoria extends Component {
  constructor(props) {
    super(props);
    //    var  hoy = moment().toDate();
    //    const dateFormat = "DD/MM/YYYY";
    this.onChangeTipoRegistro = this.onChangeTipoRegistro.bind(this);
    this.onChangeFecha = this.onChangeFecha.bind(this);
    this.onChangeMonto = this.onChangeMonto.bind(this);
    this.onChangeNotas = this.onChangeNotas.bind(this);
    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tipoRegistro: "Ingreso",
      categoria: "",
      listaCategoria: [],
      monto: 0,
      fecha: null,
      notas: "",
    };
    
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/categorias/")
      .then((response) => {
        console.log("peticion enviada");
        this.setState({ listaCategoria: response.data });
        console.log(this.state.listaCategoria);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangeTipoRegistro(e) {
    console.log(e.target.value);
    this.setState({
      tipoRegistro: e.target.value,
    });
  }
  onChangeCategoria(e) {
    console.log(e.target.value);
    this.setState({
      categoria: e.target.value,
    });
  }
  onChangeFecha(e) {
    console.log(e.target.value);
    this.setState({
      fecha: e.target.value,
    });
  }
  onChangeMonto(e) {
    console.log(e.target.value);
    this.setState({
      monto: e.target.value,
    });
  }
  onChangeNotas(e) {
    console.log(e.target.value);
    this.setState({
      notas: e.target.value,
    });
  }
  categoriaList() {
    var filteredList = this.state.listaCategoria.filter((item) => {
      return item.tipoRegistro === this.state.tipoRegistro;
    });
    return filteredList.map((categ, i) => {
      return (
        <option key={i} value={categ.categoria}>
          {categ.categoria}
        </option>

      );
    });

  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Tipo de registro: ${this.state.tipoRegistro}`);
    console.log(`Fecha: ${this.state.fecha}`);
    console.log(`Monto: ${this.state.monto}`);
    console.log(`Categoria: ${this.state.categoria}`);
    console.log(`Notas: ${this.state.notas}`);

    // var myDate = new Date(this.state.fecha);
    // var noTime = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
    const newRegistro = {
      tipoRegistro: this.state.tipoRegistro,
      fecha: this.state.fecha,
      monto: this.state.monto,
      categoria: this.state.categoria,
      notas: this.state.notas,
    };

    axios
      .post("http://localhost:4000/registros/", newRegistro)
      .then((res) => console.log(res.data));

    this.setState({
      tipoRegistro: "Ingreso",
      categoria: "",
      monto: 0,
      fecha: null,
      notas: "",
    });
    e.target.reset();
  }
  render() {
    return (
      <Container>
        <Row>
          {/* formulario */}
          <Col md="12" className="d-flex justify-content-center">
            <Card style={{ width: "55%" }} className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Crear nuevo registro</Card.Title>
              </Card.Header>

              <Card.Body className="table-full-width table-responsive px-0">
                <Form onSubmit={this.onSubmit}>
                  {/* checkbox */}
                  <Form.Group as={Row} className="md-12" controlId="tipoRegistro">
                    <Form.Label column md={6}>
                      Tipo de registro
                    </Form.Label>

                    <Col md={6}>
                      {/* <Form.Control > */}
                      <Form.Check
                        inline
                        type="radio"
                        label="Ingreso"
                        name="ingreso"
                        id="ingreso"
                        onChange={this.onChangeTipoRegistro.bind(this)}
                        value="Ingreso"
                        checked={this.state.tipoRegistro === "Ingreso"}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        label="Gasto"
                        name="gasto"
                        id="gasto"
                        onChange={this.onChangeTipoRegistro.bind(this)}
                        value="Gasto"
                        checked={this.state.tipoRegistro === "Gasto"}
                      />
                      {/* </Form.Control> */}
                    </Col>
                  </Form.Group>

                  {/* fecha */}
                  <Form.Group as={Row} className="md-12" controlId="fecha">
                    <Form.Label column md={6}>
                      Fecha
                    </Form.Label>

                    <Col className="pl-1" md={6}>
                      <Form.Control
                        type="date"
                        onChange={this.onChangeFecha.bind(this)}
                        required></Form.Control>
                    </Col>
                  </Form.Group>

                  {/* monto */}
                  <Form.Group as={Row} className="md-12" controlId="monto">
                    <Form.Label column md={6}>
                      Monto
                    </Form.Label>
                    <Col className="pl-1" md="6">
                      <Form.Control
                        type="number"
                        onChange={this.onChangeMonto.bind(this)}
                        placeholder="Ingrese el monto"
                        required></Form.Control>
                    </Col>
                  </Form.Group>

                  {/* categoria */}
                  <Form.Group as={Row} className="md-12" controlId="categoria">
                    <Form.Label column md={6}>
                      Categoría:
                    </Form.Label>
                    <Col className="pl-1" md="6">
                      <Form.Control
                        as="select"
                        name="categorias"
                        onChange={this.onChangeCategoria.bind(this)}
                        defaultValue={this.state.listaCategoria[0]}>
                        {this.categoriaList()}
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  {/* texto */}
                  <Form.Group as={Row} className="md-12" controlId="notas">
                    <Col className="pl-1" mb="3" md="12">
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Agregar Desciripción"
                        onChange={this.onChangeNotas.bind(this)}
                        required></Form.Control>
                    </Col>
                  </Form.Group>

                  <Button className="btn-fill pull-right mt-3" type="submit" variant="info">
                    Agregar Registro
                  </Button>

                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
