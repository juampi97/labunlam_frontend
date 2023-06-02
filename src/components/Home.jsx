import React from 'react'

// Importar imagen de fondo
import fondo from '../assets/fondo_index.jpg'

const Home = () => {
  return (
    <div>
      <img src={fondo} className="main_index" alt="Lab" />
    </div>
  )
}

export default Home