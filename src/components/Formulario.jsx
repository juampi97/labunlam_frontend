import React from "react";

// Import hooks react
import { useState } from "react";
// Import component react-bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const onName = (e) => {
    setNombre(e.target.value);
  };

  const onMail = (e) => {
    setEmail(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (nombre === "" || email === "") {
      alert("Debe completar todos los campos");
      return;
    } else {
      console.log(`Formulario enviado ${nombre} ${email}`);
    }
  };

  return (
    <>
      <form onSubmit={sendForm}>
        <div className="container-fluid d-flex flex-column align-items-center my-5">
          <div className="col-10 col-lg-5">
            <FloatingLabel controlId="nombre" label="Nombre">
              <Form.Control type="text" onKeyUp={onName} placeholder="Nombre" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mt-3"
            >
              <Form.Control
                type="email"
                onKeyUp={onMail}
                placeholder="nombre@example.com"
              />
            </FloatingLabel>
          </div>
          <div className="pt-4">
            <Button type="submit" className="py-2 p-3" variant="warning">
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
