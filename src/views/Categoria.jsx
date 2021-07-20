// Componente para gestión de categorías

import React, { useState } from "react";
import uniqid from "uniqid";
import {
  Radio,
  Space,
  Form,
  Table,
  Button,
  Input,
  Divider,
 
} from "antd";


const Categoria = () => {
  const { Column } = Table;
  const [form] = Form.useForm();

  const [categoria, setCategoria] = useState("");
  const [listaCategorias, setlistaCategorias] = useState([]);
  const [tipoRegistro, setTipoRegistro] = useState("Gasto");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const onChangeTipoRegistro = (e) => {
    console.log("Tipo de movimiento escogido", e.target.value);
    setTipoRegistro(e.target.value);
  };

  const addCategoria = (e) => {
    // e.preventDefault();
    // setlistaCategorias(nombre)
    // if (!categoria.trim()) {
    //   // console.log("El campo categoria esta vacio")
    //   setError("El campo categoría esta vacio");
    //   return;
    // }
    const nuevaCategoria = {
      id: uniqid(),
      tipoRegistro: e.tipoRegistro,
      categoria: e.categoria,
    };
    console.log(setlistaCategorias);
    setlistaCategorias([...listaCategorias, nuevaCategoria]);
    setCategoria("");
    setError(null);
  };

  const deleteCategoria = (id) => {
    const nuevaArray = listaCategorias.filter((item) => item.id !== id);

    setlistaCategorias(nuevaArray);
  };

  const editar = (item) => {
    setModoEdicion(true);

    setCategoria(item.categoria);
    setTipoRegistro(item.tipoRegistro);
    setId(item.id);
    form.setFieldsValue({
      id: id,
      categoria: item.categoria,
      tipoRegistro: item.tipoRegistro,
    });
  };

  const editarCategoria = (e) => {
    // e.preventDefault();

    const nuevoArray = listaCategorias.map((item) =>
      item.id === id
        ? { id: id, categoria: categoria, tipoRegistro: tipoRegistro }
        : item
    );

    setlistaCategorias(nuevoArray);
    setModoEdicion(false);
    setCategoria(" ");
  };

  const onFinish = (values) => {
    console.log(typeof values);
    console.log("Received values of form: ", values.tipoRegistro);
    // setTipoRegistro(values.tipoRegistro);
    // setCategoria(values.categoria)
    // addCategoria(values);
    form.resetFields();

    if (modoEdicion) {
      editarCategoria(values);
    } else {
      addCategoria(values);
    }
  };
  console.log(listaCategorias);
  return (
    <div className="container">
      <Divider orientation="left">Gestion de categorías</Divider>
      <div className="col">
        <div className="row">
          <div className="col">
            <Divider orientation="left">Nueva categoría</Divider>

            <Form
              form={form}
              name="nuevaCategoria"
              onFinish={onFinish}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 10 }}
              // onFinish={modoEdicion ? editarCategoria : addCategoria}
            >
              <Form.Item
                name="tipoRegistro"
                label="Tipo de registro"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese el tipo de registro",
                  },
                ]}
              >
                <Radio.Group
                  onChange={onChangeTipoRegistro}
                  value={tipoRegistro}
                  // defaultValue={"Gasto"}
                >
                  <Radio value={"Gasto"}> Gasto </Radio>
                  <Radio value={"Ingreso"}> Ingreso </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="categoria"
                label="Categoría"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese la categoría",
                  },
                ]}
              >
                <Input
                  placeholder="Ingrese la nueva categoría"
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                {modoEdicion ? "Editar categoría" : "Registrar categoría"}
              </Button>
            </Form>

            <div className="col">
              <Divider orientation="left">Mis categorías</Divider>
              <Table
                name="listaCategorias"
                size="small"
                dataSource={listaCategorias}
              >
                <Column
                  title="Tipo de registro"
                  dataIndex="tipoRegistro"
                  key="tipoRegistro"
                  // responsive= 'md'
                />
                <Column
                  title="Categoría"
                  dataIndex="categoria"
                  key="categoria"
                  // responsive= 'md'
                />

                <Column
                  title="Acciones"
                  key="action"
                  // responsive= 'md'
                  render={(item) => (
                    <Space size="middle">
                      <Button
                        type="primary"
                        onClick={() => {
                          editar(item);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        type="primary"
                        danger
                        onClick={() => {
                          deleteCategoria(item.id);
                        }}
                      >
                        Eliminar
                      </Button>
                    </Space>
                  )}
                />
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoria;
