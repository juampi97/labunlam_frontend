import React from "react";
import { useContext } from "react";
import { CounterCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Instrumentos = ({
  cod_rec,
  tipo,
  descripcion,
  marca,
  modelo,
  ab_rango
}) => {
  const { cart, addItem } = useContext(CounterCartContext);
  const cantidad = 1;

  if (cart.find((item) => item.cod_rec === cod_rec)) {
    return (
      <>
        <>
        <Col xs={10} md={5} lg={5} xl={4} className="m-2">
          <Card>
            <div className="item_card_instrumentos">
              <Card.Body >
                <Card.Title>{cod_rec}</Card.Title>
                <div className="item_card_mod_proyectores_caracteristicas">
                  <Card.Text>Tipo: {descripcion}</Card.Text>
                  <Card.Text>Marca: {marca}</Card.Text>
                  <Card.Text>Modelo: {modelo}</Card.Text>
                  {/* <Card.Text>Ancho de banda: {ab_rango}</Card.Text> */}
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <div className="mx-1">
                    <Link to={`/producto/instrumento/${modelo}`}>
                      <Button variant="secondary">Ver mas</Button>
                    </Link>
                  </div>
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
        <Col xs={10} md={6} lg={5} xl={4} className="m-2">
          <Card>
            <div className="item_card_instrumentos">
              <Card.Body >
                <Card.Title>{cod_rec}</Card.Title>
                <div className="item_card_instrumentos_caracteristicas">
                  <Card.Text> <h5 className="item_card_instrumentos_caracteristicas_title">{descripcion}</h5></Card.Text>
                  <Card.Text>Marca: {marca}</Card.Text>
                  <Card.Text>Modelo: {modelo}</Card.Text>
                  {/* <Card.Text>Ancho de banda: {ab_rango}</Card.Text> */}
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <div className="mx-1">
                    <Link to={`/instrumento/${modelo}`}>
                      <Button variant="secondary">Ver mas</Button>
                    </Link>
                  </div>
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

export default Instrumentos;
