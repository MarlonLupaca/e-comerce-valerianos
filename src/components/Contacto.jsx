import React from 'react'

const Contacto = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[620px] bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">¡Estamos trabajando en ello! 🚧</h1>
      <p className="text-lg text-gray-700">
        Nuestra página de <span className="font-bold text-red-500">"Contacto"</span> está en construcción.  
        Pronto podrás conocer más sobre nuestra historia y misión.
      </p>
      <img
        src="./perrito.avif"
        alt="Página en construcción"
        className="w-[300px] h-auto mt-6 rounded-lg shadow-lg"
      />
      <p className="text-gray-500 mt-4">¡Gracias por tu paciencia! 💖</p>
    </div>
  )
}

export default Contacto
