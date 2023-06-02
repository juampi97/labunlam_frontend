import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InstrumentoDetail = ({ descripcion, marca, modelo, ab_rango, especificaciones, ubicacion, adicionales} ) => {
  return (
    <>
      <Col xs={10} md={8}>
        <h1 className="">{descripcion}</h1>
        <p>Marca: {marca}</p>
        <p>Modelo: {modelo}</p>
        <p>Ancho de banda - rango: {ab_rango}</p> 
        <p>Especificaciones: {especificaciones}</p> 
        <p>Adicionales: {adicionales}</p> 
        <p>Ubicacion: {ubicacion}</p> 
      </Col>
    </>
  );
};

export default InstrumentoDetail;
