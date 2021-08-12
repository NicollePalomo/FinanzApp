import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "actions/authActions";
import classnames from "classnames";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Col md={12}>
                <h4>
                  <b>Bienvenido a FinanzApp</b>
                </h4>
              </Col>

              <Form noValidate onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    //value={this.state.email}
                    error={errors.email}
                    type="email"
                    placeholder="Ingrese su correo"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                    {errors.emailnotfound}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingrese su contraseña" />
                  <Form.Control.Feedback type="invalid">
                    Por favor, proporcione una contraseña
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="mb-3">
                  Entrar
                </Button>
                <p className="text-muted">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </Form>
            </Col>

            <Col md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
