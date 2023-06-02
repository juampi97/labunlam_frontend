import React from "react";
import { useContext } from "react";
import { CounterCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Notebooks = ({ cod_rec, marca, modelo, vga, hdmi, s_op }) => {
  const { cart, addItem } = useContext(CounterCartContext);
  const cantidad = 1;

  let puertoHDMI;
  let puertoVGA;
  hdmi? puertoHDMI= "Disponible" : puertoHDMI= "No disponible"; 
  vga? puertoVGA= "Disponible" : puertoVGA= "No disponible"; 

  if (cart.find((item) => item.cod_rec === cod_rec)) {
    return (
      <>
        <>
        <Col xs={10} md={5} lg={4} xl={3} className="m-2">
          <Card>
            <div className="item_card_notebooks">
              <Card.Body>
                <Card.Title>{cod_rec}</Card.Title>
                <div className="item_card_notebooks_descripcion">
                  <Card.Text>Marca: {marca}</Card.Text>
                  <Card.Text>Modelo: {modelo}</Card.Text>
                  <Card.Text>Sistema Operativo: {s_op}</Card.Text>
                  <Card.Text>Salida HDMI: {puertoHDMI}</Card.Text>
                  <Card.Text>Salida VGA: {puertoVGA}</Card.Text>

                </div>
                <div className="d-flex flex-row justify-content-center">
                  <div className="mx-1 d-none">
                    <Button
                      onClick={() => addItem(cod_rec, cantidad)}
                      variant="success"
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Col>
        </>
      </>
    );
  }

  return (
    <>
      <>
        <Col xs={10} md={5} lg={4} xl={3} className="m-2">
          <Card>
            <div className="item_card_notebooks">
              <Card.Body>
                <Card.Title>{cod_rec}</Card.Title>
                <div className="item_card_notebooks_descripcion">
                  <Card.Text>Marca: {marca}</Card.Text>
                  <Card.Text>Modelo: {modelo}</Card.Text>
                  <Card.Text>Sistema Operativo: {s_op}</Card.Text>
                  <Card.Text>Salida HDMI: {puertoHDMI}</Card.Text>
                  <Card.Text>Salida VGA: {puertoVGA}</Card.Text>
                </div>
                <div className="d-flex flex-row justify-content-center">
                  <div className="mx-1">
                    <Button
                      onClick={() => addItem(cod_rec, cantidad)}
                      variant="success"
                    >
                      Agregar
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </>
    </>
  );
};

export default Notebooks;
