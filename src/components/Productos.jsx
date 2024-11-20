import React, { useState } from "react";

const ProductoCard = ({ producto, addToCart }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition">
      <img
        src={producto.image}
        alt={producto.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h4 className="text-lg font-bold mt-4">{producto.name}</h4>
      <p className="text-red-500 text-lg">Desde {producto.price}</p>
      <button
        onClick={() => addToCart(producto)}
        className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-700 transition"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

const Productos = ({ addToCart }) => {
  const productos = [
    {
      id: 1,
      name: "Mariposa Junior Rosa",
      price: "S/180.00",
      image: "./torta1.jpg", // Asegúrate de usar la ruta correcta
    },
    {
      id: 2,
      name: "Corazón Aesthetic 01",
      price: "S/180.00",
      image: "./torta2.jpg", // Asegúrate de usar la ruta correcta
    },
    {
      id: 3,
      name: "Butterfly 04",
      price: "S/120.00",
      image: "./torta3.jpg", // Asegúrate de usar la ruta correcta
    },
    {
      id: 4,
      name: "Chocolate Lover 02",
      price: "S/200.00",
      image: "./torta4.jpg", // Asegúrate de usar la ruta correcta
    },
    {
        id: 5,
        name: "Mariposa Junior Rosa",
        price: "S/180.00",
        image: "./torta1.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 6,
        name: "Corazón Aesthetic 01",
        price: "S/180.00",
        image: "./torta2.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 7,
        name: "Butterfly 04",
        price: "S/120.00",
        image: "./torta3.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 8,
        name: "Chocolate Lover 02",
        price: "S/200.00",
        image: "./torta4.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 9,
        name: "Mariposa Junior Rosa",
        price: "S/180.00",
        image: "./torta1.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 10,
        name: "Corazón Aesthetic 01",
        price: "S/180.00",
        image: "./torta2.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 11,
        name: "Butterfly 04",
        price: "S/120.00",
        image: "./torta3.jpg", // Asegúrate de usar la ruta correcta
      },
      {
        id: 12,
        name: "Chocolate Lover 02",
        price: "S/200.00",
        image: "./torta4.jpg", // Asegúrate de usar la ruta correcta
      },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 px-4 py-12">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Productos;
