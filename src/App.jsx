import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Asegúrate de importar HashRouter aquí
import Header from "./components/Header";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Tienda from "./components/Tienda";
import Contacto from "./components/Contacto";
import Productos from "./components/Productos";

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar productos del carrito por índice
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Simplificado con filter
  };

  return (
    <HashRouter> {/* Mantén HashRouter */}
      <div className="bg-gray-100">
        <Header cart={cart} removeFromCart={removeFromCart} /> {/* Si Header necesita props relacionadas con el carrito */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
