import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import InstrumentosList from "./InstrumentosList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

const InstrumentosListContainer = () => {
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

  // obtener el valor de la marca del vector notebooks
  let vectorDescripcion = [];
  instrumentos.map((producto) => {
    if (!vectorDescripcion.includes(producto.descripcion))
      vectorDescripcion.push(producto.descripcion);
  });

  let vectorMarca = [];
  instrumentos.map((producto) => {
    if (!vectorMarca.includes(producto.marca)) vectorMarca.push(producto.marca);
  });

  let vectorModelo = [];
  instrumentos.map((producto) => {
    if (!vectorModelo.includes(producto.modelo))
      vectorModelo.push(producto.modelo);
  });

  let vectorAB = [];
  instrumentos.map((producto) => {
    if (!vectorAB.includes(producto.ab_rango)) vectorAB.push(producto.ab_rango);
  });

  // obtener el valor de los Form select
  const [descripcion, setDescripcion] = useState("");
  const [marca, setMarca] = useState("");
  const [codrec, setCodrec] = useState("");
  const [ab_rango, setAB_rango] = useState("");

  function handleChangeDescripcion() {
    setDescripcion(document.getElementById("selectDescripcion").value);
  }

  function handleChangeMarca() {
    setMarca(document.getElementById("selectMarca").value);
  }

  function handleChangeModelo() {
    setCodrec(document.getElementById("selectModelo").value);
  }

  function handleChangeAB() {
    setAB_rango(document.getElementById("selectAB").value);
  }

  function resetFilter(){
    setDescripcion("");
    document.getElementById("selectDescripcion").value="";
    setMarca("");
    document.getElementById("selectMarca").value="";
    setCodrec("");
    document.getElementById("selectModelo").value="";
    setAB_rango("");
    document.getElementById("selectAB").value="";
  }
  
  // Opciones de filtrado

    // Codrec segun la marca seleccionada
    const [vectorMarcaList, setvectorMarcaList] = useState([]);
    const [vectorModeloList, setvectorModeloList] = useState([]);
    const [vectorABRango, setvectorABRango] = useState([]);

    const getMarca = () => {
      let marca = [];
      instrumentos.map((instrument) => {
        if (instrument.descripcion === descripcion && !marca.includes(instrument.marca)) {
          marca.push(instrument.marca);
        }
      });
      return marca;
    };

    const getModelo = () => {
      let modelo = [];
      instrumentos.map((instrument) => {
        if (instrument.descripcion === descripcion && !modelo.includes(instrument.modelo)) {
          modelo.push(instrument.modelo);
        }
      });
      return modelo;
    };

    const getAB = () => {
      let ab = [];
      instrumentos.map((instrument) => {
        if (instrument.descripcion === descripcion && !ab.includes(instrument.ab_rango)) {
          ab.push(instrument.ab_rango);
        }
      });
      return ab;
    };
  
    useEffect(() => {
      let marca = [];
      if (descripcion === "") {
        instrumentos.map((instrument) => {
          if (!marca.includes(instrument.marca)) {
            marca.push(instrument.marca);
          }
        });
      } else {
        marca = getMarca();
      }
      setvectorMarcaList(marca);

      let modelo = [];
      if (descripcion === "") {
        instrumentos.map((instrument) => {
          if (!modelo.includes(instrument.modelo)) {
            modelo.push(instrument.modelo);
          }
        });
      } else {
        modelo = getModelo();
      }
      setvectorModeloList(modelo);

      let ab = [];
      if (descripcion === "") {
        instrumentos.map((instrument) => {
          if (!ab.includes(instrument.ab_rango)) {
            ab.push(instrument.ab_rango);
          }
        });
      } else {
        ab = getAB();
      }
      setvectorABRango(ab);

    }, [descripcion, marca, codrec, instrumentos]);

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
      <Container className="mt-5 mb-2">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={10} md={4} lg={4}>
            <Form.Group className="mb-3">
              <Form.Select onChange={handleChangeDescripcion} id="selectDescripcion">
                <option value="">Descripcion</option>
                {vectorDescripcion.map((descripciones) => {
                  return <option value={descripciones}>{descripciones}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          {/* <Col xs={10} md={4} lg={4}>
            <Form.Group className="mb-3">
              <Form.Select onChange={handleChangeMarca} id="selectMarca">
                <option value="">Marca</option>
                {vectorMarcaList.map((marca) => {
                  return <option value={marca}>{marca}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={10} md={4} lg={4}>
            <Form.Group className="mb-3">
              <Form.Select onChange={handleChangeModelo} id="selectModelo">
                <option value="">Modelo</option>
                {vectorModeloList.map((modelo) => {
                  return <option value={modelo}>{modelo}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={10} md={12} lg={12}>
            <Form.Group className="mb-3">
              <Form.Select onChange={handleChangeAB} id="selectAB">
                <option value="">Ancho de banda/rango</option>
                {vectorABRango.map((ab) => {
                  return <option value={ab}>{ab}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col> */}
          <Col xs={3} md={1} className="mb-3 ms-2 justify-items-center">
            <Button onClick={resetFilter} variant="danger">Reset</Button>
          </Col>
        </Row>
      </Container>
      <InstrumentosList instrumentos={instrumentos} descripcion={descripcion} marca={marca} codrec={codrec} ab_rango={ab_rango} />
    </>
  );
};

export default InstrumentosListContainer;
