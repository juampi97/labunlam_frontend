import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InstrumentoDetail from "./InstrumentoDetail";
import Spinner from "react-bootstrap/Spinner";


const InstrumentoDetailContainer = () => {
  const { cod_rec } = useParams();

  const [instrumentos, setInstrumentos] = useState([]);
  const [productosLoaded, setProductosLoaded] = useState(false);


  useEffect(() => {
    const fetchAllInstrumentos = async () => {
      try {
        const res = await axios.get("https://labunlam-backend.vercel.app/api/instruments");
        setInstrumentos(res.data);
        setProductosLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllInstrumentos();
  }, []);

  // Filtro instrumetnos por cod_rec
  let instrumento = instrumentos.filter((instrumento) => {
    return instrumento.cod_rec === cod_rec;
  });

  if (!productosLoaded) {
    return (
      <>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Spinner animation="border" variant="success" />;
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row className=" mt-5 justify-content-center">
          {instrumento.map((producto) => {
            return (
              <InstrumentoDetail
                key={producto.cod_rec}
                cod_rec={producto.cod_rec}
                tipo={producto.tipo}
                descripcion={producto.descripcion}
                marca={producto.marca}
                modelo={producto.modelo}
                ab_rango={producto.ab_rango}
                especificaciones={producto.especificaciones}
                ubicacion={producto.ubicacion}
                adicionales={producto.adicionales}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default InstrumentoDetailContainer;
