import React from "react";
import { useContext } from "react";
import { CounterCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";
import ListProducts from "./ListProducts";
import ResetCarrito from "./ResetCarrito";
import Alert from "react-bootstrap/Alert";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ListAditionalHdmi from "./ListAditionalHdmi";
import ListAditionalZapatilla from "./ListAditionalZapatilla";

const Cart = () => {
  const { cart, hdmiAdicional, zapatillaAdicional } = useContext(CounterCartContext);

  console.log(hdmiAdicional);

  if (cart.length === 0) {
    return (
      <>
        <Container fluid className="mt-5">
          <Row className="justify-content-center align-items-center">
            <Col xs={10} md={8} lg={6}>
              <Alert
                variant="danger"
                className="align-items-center justify-items-center"
              >
                <p className="mb-0 text-center">El carrito esta vacio.</p>
              </Alert>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center mt-3">
            <Col
              xs={10}
              md={8}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to={"/"}>
                <Button variant="warning">Volver a Inicio</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center mt-5">
        {cart.map((producto) => {
          return (
            <ListProducts
              key={producto.cod_rec}
              cod_rec={producto.cod_rec}
              cantidad={producto.cantidad}
            />
          );
        })}
      {hdmiAdicional > 0 ? <ListAditionalHdmi /> : null}
      {zapatillaAdicional > 0 ? <ListAditionalZapatilla /> : null}
      </div>
      
      <ResetCarrito />
      <Formulario />
    </>
  );
};

export default Cart;
