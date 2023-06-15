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
  const { modelo } = useParams();

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

  //Agrupo instrumentos
    const generateArrayCantidades = (data) => {
    let products = [];

    data.forEach((element) => {
      let item = {
        id: null,
        tipo: element.tipo,
        descripcion: element.descripcion,
        marca: element.marca,
        modelo: element.modelo,
        filtro: element.filtro,
        cod_manual: element.cod_manual,
        especificaciones: element.especificaciones,
        estado: element.estado,
        ubicacion: element.ubicacion,
        adicionales: element.adicionales,
        cantidad: 1,
      };
      if (products.find((prod) => prod.modelo == item.modelo)) {
        let producto = products.find((prod) => prod.modelo == item.modelo);
        producto.cantidad += 1;
      } else {
        let itemId;
        if (products.length === 0) {
          item.id = 1;
        } else {
          itemId = products[products.length - 1].id + 1;
          item.id = itemId;
        }
        products.push(item);
      }
    });
    return products;
  };
  let instrumentosAgrupados = generateArrayCantidades(instrumentos);

  // Filtro instrumetnos por modelo
  let instrumento = instrumentosAgrupados.filter((instrumento) => {
    return instrumento.modelo === modelo;
  });

  if (!productosLoaded) {
    return (
      <>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Spinner animation="border" variant="success" />
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
                key={producto.modelo}
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
