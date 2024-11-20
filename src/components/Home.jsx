import React from "react";
import Carousel from "react-multi-carousel"; // Requiere instalación: npm install react-multi-carousel
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const carouselItems = [
    {
      image: "carrusel1.webp",
      title: "¡Delicias únicas para cada ocasión!",
      description: "Explora nuestras tortas artesanales hechas con los mejores ingredientes.",
    },
    {
      image: "carrusel1.webp",
      title: "Celebraciones inolvidables",
      description: "Diseñamos pasteles personalizados que reflejan tus momentos especiales.",
    },
    {
      image: "carrusel1.webp",
      title: "Variedad de sabores y estilos",
      description: "Elige entre una amplia selección de tortas para todos los gustos.",
    },
  ];

  return (
    <div className="bg-black text-white mx-auto overflow-hidden">
      {/* Carrusel */}
      <section className="relative">
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
          }}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          showDots
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="relative h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-red-500 text-3xl font-bold mb-4">{item.title}</h2>
                <p className="text-yellow-400 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Información de productos destacados */}
      <section className="py-12">
        <h3 className="text-center text-red-500 text-4xl font-bold mb-6">¡Las más pedidas!</h3>
        <p className="text-center text-yellow-400 mb-8">
          Las preferidas por nuestros <span className="font-bold">#Dulcefinalovers</span>, disponibles en diversos tamaños y sabores.
        </p>
        <div className="grid grid-cols-4 gap-6 px-4">
          {/* Tarjeta de producto */}
          <div className="bg-white text-black p-4 shadow-lg rounded-lg">
            <img src="./torta1.jpg" alt="Mariposa Junior Rosa" className="w-full h-40 object-cover rounded-md" />
            <h4 className="text-lg font-bold mt-4">Mariposa Junior Rosa</h4>
            <p className="text-red-500 text-lg">Desde S/180.00</p>
          </div>
          <div className="bg-white text-black p-4 shadow-lg rounded-lg">
            <img src="./torta2.jpg" alt="Corazón Aesthetic 01" className="w-full h-40 object-cover rounded-md" />
            <h4 className="text-lg font-bold mt-4">Corazón Aesthetic 01</h4>
            <p className="text-red-500 text-lg">Desde S/180.00</p>
          </div>
          <div className="bg-white text-black p-4 shadow-lg rounded-lg">
            <img src="./torta3.jpg" alt="Butterfly 04" className="w-full h-40 object-cover rounded-md" />
            <h4 className="text-lg font-bold mt-4">Butterfly 04</h4>
            <p className="text-red-500 text-lg">Desde S/120.00</p>
          </div>
          <div className="bg-white text-black p-4 shadow-lg rounded-lg">
            <img src="./torta4.jpg" alt="Chocolate Lover 02" className="w-full h-40 object-cover rounded-md" />
            <h4 className="text-lg font-bold mt-4">Chocolate Lover 02</h4>
            <p className="text-red-500 text-lg">Desde S/200.00</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-700 transition">
            Ver más tortas
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
