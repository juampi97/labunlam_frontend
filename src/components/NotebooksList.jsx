import React from "react";
import { useState, useEffect } from "react";
import Notebooks from "./Notebooks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotebooksList = ({ notebooks, marca, modelo }) => {

  const [notebooksFiltrados, setnotebooksFiltrados] = useState(notebooks);

  const filtrarNotebooks = () => {
    let notebooksFiltrados = notebooks;
    if (marca && modelo) {
      notebooksFiltrados = notebooksFiltrados.filter(
        (proyector) => proyector.marca === marca && proyector.cod_rec === modelo
      );
    } else if (marca) {
      notebooksFiltrados = notebooksFiltrados.filter(
        (proyector) => proyector.marca === marca
      );
    } else if (modelo) {
      notebooksFiltrados = notebooksFiltrados.filter(
        (proyector) => proyector.cod_rec === modelo
      );
    } else {
      notebooksFiltrados = notebooks;
    }
    setnotebooksFiltrados(notebooksFiltrados);
  };

  useEffect(() => {
    filtrarNotebooks();
  }, [marca, modelo, notebooks]);

  return (
    <>
      <Container >
        <Row xs={11} md={10} lg={8} className="justify-content-center">
          {notebooksFiltrados.map((producto) => {
            return (
              <Notebooks
                key={producto.cod_rec}
                cod_rec={producto.cod_rec}
                marca={producto.marca}
                modelo={producto.modelo}
                vga={producto.vga}
                hdmi={producto.hdmi}  
                s_op={producto.s_op}  
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default NotebooksList;
