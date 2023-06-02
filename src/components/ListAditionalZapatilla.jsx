import React from "react";
import { useContext } from "react";
import { CounterCartContext } from "../context/CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";


const ListAditionalZapatilla = () => {

    const { zapatillaAdicional, removeZapatilla } = useContext(CounterCartContext);

  return (
    <div className="col-11 col-lg-7">
    <ListGroup className="my-2" as="ol">
      <ListGroup.Item as="li" className="d-flex align-items-start">
        <div className="col-10 col-lg-11 ms-2">
          <div className="fw-bold">Zapatilla adicional</div>
          Cantidad: {zapatillaAdicional}
        </div>
        <div className="col-1 pt-1">
          <Button onClick={() => removeZapatilla()} variant="danger">
            X
          </Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  </div>
  )
}

export default ListAditionalZapatilla