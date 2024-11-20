import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Tienda from "./components/Tienda";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";

function App() {
  const [cart, setCart] = useState([]); // Aquí se guarda el carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para el carrito desplegable

  const addToCart = (product) => {
    setCart([...cart, product]); // Agregar productos al carrito
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Cambiar el estado de visibilidad del carrito
  };

  return (
    <Router>
      <div className="bg-gray-100">
        <Header cart={cart} toggleCart={toggleCart} /> {/* Pasamos cart y toggleCart */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
