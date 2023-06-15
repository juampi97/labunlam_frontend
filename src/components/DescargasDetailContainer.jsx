import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProyectoresList from "./ProyectoresList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const DescargasDetailContainer = () => {

  const [proyectores, setProyectores] = useState([]);
  const [productosLoaded, setProductosLoaded] = useState(false);

  useEffect(() => {
    const fetchAllProyectores = async () => {
      try {
        const res = await axios.get(
          "https://labunlam-backend.vercel.app/api/proyectores"
        );
        setProyectores(res.data);
        setProductosLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProyectores();
  }, []);

  return (
    <>
    <table>
      <thead>
        <tr scope="col">
          <th scope="col"> Marca </th>
          <th scope="col"> Modelo </th>
        </tr>
      </thead>
      <tbody>
        {proyectores.map((proyector)=>(
           <tr key={proyector.sn}>
          <td>{proyector.marca}</td>
          <td>{proyector.modelo}</td>
        </tr>
        ))}
       
      </tbody>
    </table>
    </>
  )
}

export default DescargasDetailContainer