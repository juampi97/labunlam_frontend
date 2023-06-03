import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NotebooksList from "./NotebooksList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

const NotebooksListContainer = () => {
  const [notebooks, setNotebooks] = useState([]);
  const [productosLoaded, setProductosLoaded] = useState(false);

  useEffect(() => {
    const fetchAllnotebooks = async () => {
      try {
        const res = await axios.get("https://labunlam-backend.vercel.app/api/notebooks");
        setNotebooks(res.data);
        setProductosLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllnotebooks();
  }, []);

  const [vectorMarca, setVectorMarca] = useState([]);

  const getMarca = () => {
    let marcas = [];
    notebooks.map((notebook) => {
      if (!marcas.includes(notebook.marca)) {
        marcas.push(notebook.marca);
      }
    });
    return marcas;
  };

  useEffect(() => {
    let marcas = getMarca();
    setVectorMarca(marcas);
  }, [notebooks]);

  // obtener el valor de los Form select
  const [marca, setMarca] = useState("");
  const [codrec, setCodrec] = useState("");

  function handleChangeMarca() {
    setMarca(document.getElementById("selectMarca").value);
  }

  function handleChangeModelo() {
    setCodrec(document.getElementById("selectModelo").value);
  }

  function resetFilter() {
    setMarca("");
    document.getElementById("selectMarca").value = "";
    setCodrec("");
    document.getElementById("selectModelo").value = "";
  }

  // Codrec segun la marca seleccionada
  const [vectorCodRec, setvectorCodRec] = useState([]);

  const getCodrec = () => {
    let codrec = [];
    notebooks.map((notebook) => {
      if (notebook.marca === marca && !codrec.includes(notebook.cod_rec)) {
        codrec.push(notebook.cod_rec);
      }
    });
    return codrec;
  };

  useEffect(() => {
    let codrec = [];
    if (marca === "") {
      notebooks.map((notebook) => {
        if (!codrec.includes(notebook.cod_rec)) {
          codrec.push(notebook.cod_rec);
        }
      });
    } else {
      codrec = getCodrec();
    }
    setvectorCodRec(codrec);
  }, [marca, notebooks]);

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
          <Col xs={10} md={5} lg={4}>
            <Form.Group className="mb-3">
              <Form.Select onChange={handleChangeMarca} id="selectMarca">
                <option value="">Marca</option>
                {vectorMarca.map((marca) => {
                  return <option value={marca}>{marca}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={10} md={5} lg={4}>
            <Form.Group className="mb-3">
              <Form.Select onChange={handleChangeModelo} id="selectModelo">
                <option value="">Modelo</option>
                {vectorCodRec.map((codigo) => {
                  return <option value={codigo}>{codigo}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={3} md={1} className="mb-3 ms-2 justify-items-center">
            <Button onClick={resetFilter} variant="danger">
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
      <NotebooksList notebooks={notebooks} marca={marca} modelo={codrec} />
    </>
  );
};

export default NotebooksListContainer;
