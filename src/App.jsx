import React from "react";

// Import react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Import components propios
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProyectoresListContainer from "./components/ProyectoresListContainer";
import NotebooksListContainer from "./components/NotebooksListContainer";
import InstrumentosListContainer from "./components/InstrumentosListContainer";
import InstrumentoDetailContainer from "./components/InstrumentoDetailContainer";
import DescargasDetailContainer from "./components/DescargasDetailContainer";
import Cart from "./components/Cart";

// Import Context
import CartContext from "./context/CartContext";

import "./App.css";

function App() {

  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/proyectores"
              element={<ProyectoresListContainer />}
            />
            <Route
              exact
              path="/notebooks"
              element={<NotebooksListContainer />}
            />
            <Route
              exact
              path="/instrumentos"
              element={<InstrumentosListContainer />}
            />
            <Route
              exact
              path="/instrumento/:cod_rec"
              element={<InstrumentoDetailContainer />}
            />
            <Route
              exact
              path="/descargas"
              element={<DescargasDetailContainer />}
            />
            <Route exact path="/carrito" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
