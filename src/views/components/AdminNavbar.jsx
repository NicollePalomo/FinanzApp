import React  from "react";
// import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav,  Button } from "react-bootstrap";

// import routes from "../../routes";

function Header() {
  // const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  // const getBrandText = () => {
  //   for (let i = 0; i < routes.length; i++) {
  //     if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
  //       return routes[i].name;
  //     }
  //   }
  //   return "Brand";
  // };
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          {/* menu desplegable sidebar < 980 px */}
          <Button
            variant="light"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}>
            <i className="fas fa-ellipsis-v"></i>
          </Button>

          {/* nombre del area
          <Navbar.Brand href="" onClick={(e) => e.preventDefault()} className="mr-2">
            {getBrandText()}
          </Navbar.Brand> */}
        </div>

        {/* menu de hamburguesa < 980 px */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* menu izquierdo jajaja! */}
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link className="m-0" href="#" onClick={(e) => e.preventDefault()}>
                <span className="d-lg-block">Hola Usuario     .</span>
                <i className="nc-icon nc-circle-09 ml-3"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
