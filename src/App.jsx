// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import Categoria from "./views/Categoria.jsx";

import Registro from "./views/Registro.jsx";
import Reporte from "./views/Reporte.jsx";
import { Layout, Menu, Divider, Row, Col } from "antd";
import {
  UnorderedListOutlined,
  DollarOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./views/Login.jsx";

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header>
          <Row>
            <Col span={8} style={{ color: "white" }}>
              FinanzApp
            </Col>
            <Col span={8} offset={8} style={{ color: "white" }}>
              Hola Usuario!
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Divider style={{ color: "#d8d8d8" }} orientation="left">
              Inicio
            </Divider>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
              <Menu.Item key="1" icon={<DollarOutlined />}>
                <Link to="/registro"> Registro de movimientos</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                <Link to="/categoria"> Gestionar categorias</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<PieChartOutlined />}>
                <Link to="/reporte">Ver reportes</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<LogoutOutlined />}>
                <Link to="/"> Cerrar sesión</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route path="/categoria">
                <Categoria />
              </Route>
              <Route path="/registro">
                <Registro />
              </Route>
              
              <Route path="/reporte">
                <div className="container" height="1000">
                  <Reporte />
                </div>
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
