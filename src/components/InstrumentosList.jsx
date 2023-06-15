import React from "react";
import Instrumentos from "./Instrumentos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

const InstrumentosList = ({
  instrumentos,
  descripcion,
  marca,
  codrec,
  ab_rango,
}) => {
  const [instrumentosFiltradoss, setinstrumentosFiltradoss] =
    useState(instrumentos);

  const filtrarInstrumentos = () => {
    let instrumentosFiltrados = instrumentos;

    if (descripcion) {
      instrumentosFiltrados = instrumentosFiltrados.filter(
        (instrumento) => instrumento.descripcion === descripcion
      );
      if (marca) {
        instrumentosFiltrados = instrumentosFiltrados.filter(
          (instrumento) => instrumento.marca === marca
          );
          if(codrec) {
          instrumentosFiltrados = instrumentosFiltrados.filter(
            (instrumento) => instrumento.cod === marca
          );
        }
      }
    }

    setinstrumentosFiltradoss(instrumentosFiltrados);
  };

  useEffect(() => {
    filtrarInstrumentos();
  }, [instrumentos, descripcion, marca, codrec, ab_rango]);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {instrumentosFiltradoss.map((producto) => {
            return (
              <Instrumentos
                key={producto.cod_rec}
                cod_rec={producto.cod_rec}
                tipo={producto.tipo}
                descripcion={producto.descripcion}  
                marca={producto.marca}
                modelo={producto.modelo}
                ab_rango={producto.ab_rango}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default InstrumentosList;
