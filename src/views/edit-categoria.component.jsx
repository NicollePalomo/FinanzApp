import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";

export default class EditCategoria extends Component {
  constructor(props) {
    super(props);
    this.onChangeTipoRegistro = this.onChangeTipoRegistro.bind(this);
    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tipoRegistro: "Ingreso",
      categoria: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/categorias/" + this.props.match.params.id)
      .then((response) => {

        this.setState({
          tipoRegistro: response.data.tipoRegistro,
          categoria: response.data.categoria,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangeTipoRegistro(e) {
    this.setState({
      tipoRegistro: e.target.value,
    });
  }
  onChangeCategoria(e) {
    this.setState({
      categoria: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      tipoRegistro: this.state.tipoRegistro,
      categoria: this.state.categoria,
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/categorias/update-categoria/" +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12" className="d-flex justify-content-center">
              <Card
                style={{ width: "70%" }}
                className="card-plain table-plain-bg"
              >
                <Card.Header>
                  <Card.Title as="h4">Nueva Categoría</Card.Title>
                </Card.Header>

                <Card.Body className="table-full-width table-responsive px-0">
                  <Form onSubmit={this.onSubmit}>
                    {/* categoria a ingresar */}

                    <Form.Group
                      as={Row}
                      className="md-12"
                      controlId="categoria"
                    >
                      <Form.Label column md={3}>
                        Categoría
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese la categoría"
                          onChange={this.onChangeCategoria.bind(this)}
                          value={this.state.categoria}
                        ></Form.Control>
                      </Col>
                    </Form.Group>

                    <br></br>

                    <Form.Group
                      as={Row}
                      className="md-12"
                      controlId="tipoRegistro"
                    >
                      <Form.Label column md={3}>
                        Tipo de registro
                      </Form.Label>
                      <Col md={9}>
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
                    <br></br>

                    <Button
                      className="btn-fill pull-right text-center"
                      type="submit"
                      variant="info"
                    >
                      Editar Categoría
                    </Button>
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
