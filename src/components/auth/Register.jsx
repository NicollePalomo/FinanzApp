import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "actions/authActions";
import classnames from "classnames";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <Container>
          <Row>
            <Col md={6}>
              <Card as={Col} md={8} className="d-flex justify-content-center ">
                <Card.Body>
                  <Col md={12} className="text-center mb-4">
                    <a href="/#" className="mx-1">
                      <div className="logo">
                        <img
                          src={require("../../assets/img/finanzapp.png").default}
                          alt="..."
                          style={{ width: "80px", padding: "0" }}
                        />
                      </div>
                    </a>
                    <Card.Title as="h4" className="mb-4">
                      <b>Bienvenido a FinanzApp</b>
                    </Card.Title>
                    <spam className="card-category">----------- Registrate -----------</spam>
                  </Col>
                  <Col md={12} className=" text-center mt-3">
                    <Form noValidate onSubmit={this.onSubmit}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control
                          onChange={this.onChange}
                          value={this.state.name}
                          error={errors.name}
                          id="name"
                          type="text"
                          className={classnames("", {
                            invalid: errors.name,
                          })}
                          placeholder="Usuario"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          className={classnames("", {
                            invalid: errors.email,
                          })}
                          placeholder="Email"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          className={classnames("", {
                            invalid: errors.password,
                          })}
                          placeholder="Contraseña"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control
                          onChange={this.onChange}
                          value={this.state.password2}
                          error={errors.password2}
                          id="password2"
                          type="password"
                          className={classnames("", {
                            invalid: errors.password2,
                          })}
                          placeholder="Confirmar contraseña"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password2}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button
                        type="submit"
                        className="m-4 btn-fill text-center"
                        variant="info"
                        style={{ borderRadius: "20px" }}>
                        Registrarse
                      </Button>
                      <p className="text-muted card-category">
                        ya estas registrado? <Link to="/register">Inicia sesión</Link>
                      </p>
                    </Form>
                  </Col>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
