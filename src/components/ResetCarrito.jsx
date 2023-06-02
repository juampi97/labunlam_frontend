import React from "react";
// Import bootstrap elements
import Button from "react-bootstrap/Button";
// Import hooks react
import { useContext } from  "react";
// Import context
import { CounterCartContext } from "../context/CartContext";

const ResetCarrito = () => {

    const { resetCart } = useContext(CounterCartContext);

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <Button onClick={() => resetCart()} variant="outline-danger">
        Vaciar carrito
      </Button>
    </div>
  );
};

export default ResetCarrito;
