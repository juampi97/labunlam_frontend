import React from "react";
import Proyectores from "./Proyectores";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

const ProyectoresList = ({ proyectores, marca, modelo }) => {
  const [proyectoresFiltrados, setProyectoresFiltrados] = useState(proyectores);

  const filtrarProyectores = () => {
    let proyectoresFiltrados = proyectores;
    if (marca && modelo) {
      proyectoresFiltrados = proyectoresFiltrados.filter(
        (proyector) => proyector.marca === marca && proyector.cod_rec === modelo
      );
    } else if (marca) {
      proyectoresFiltrados = proyectoresFiltrados.filter(
        (proyector) => proyector.marca === marca
      );
    } else if (modelo) {
      proyectoresFiltrados = proyectoresFiltrados.filter(
        (proyector) => proyector.cod_rec === modelo
      );
    } else {
      proyectoresFiltrados = proyectores;
    }
    setProyectoresFiltrados(proyectoresFiltrados);
  };

  useEffect(() => {
    filtrarProyectores();
  }, [marca, modelo, proyectores]);

  return (
    <>
      <Container>
        <Row xs={11} md={10} lg={8} className="justify-content-center">
          {proyectoresFiltrados.map((producto) => {
            return (
              <Proyectores
                key={producto.cod_rec}
                cod_rec={producto.cod_rec}
                marca={producto.marca}
                modelo={producto.modelo}
                vga={producto.vga}
                hdmi={producto.hdmi}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProyectoresList;
