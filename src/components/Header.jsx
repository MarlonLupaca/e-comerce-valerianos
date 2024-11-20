    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="sticky top-0 right-0 z-50">
        {/* Header */}
        <header className="bg-black px-5 py-3">
            <div className="flex justify-between items-center">
            <img src="./logo.png" alt="logo" className="h-[50px]" />

            {/* Navigation */}
            <nav className="text-white">
                <ul className="flex justify-center space-x-8">
                <li className="hover:text-red-500">
                    <Link to="/">HOME</Link>
                </li>
                <li className="hover:text-red-500">
                    <Link to="/nosotros">NOSOTROS</Link>
                </li>
                <li className="hover:text-red-500">
                    <Link to="/tienda">TIENDA</Link>
                </li>
                <li className="hover:text-red-500">
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
                <li className="hover:text-red-500">
                    <Link to="/contacto">CONTACTO</Link>
                </li>
                </ul>
            </nav>

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
                <button
                onClick={toggleCart}
                className="flex items-center space-x-1 text-red-500 hover:text-red-700"
                >
                <span>🛒</span>
                <span>0 item(s)</span>
                </button>
            </div>
            </div>
        </header>

        {/* Cart Side Panel */}
        {isCartOpen && (
            <div className="absolute top-0 right-0 w-80 h-screen bg-white shadow-lg z-50">
            <div className="p-4 flex justify-between items-center border-b border-red-500">
                <h2 className="text-lg font-bold text-black">Tu Carrito</h2>
                <button
                onClick={toggleCart}
                className="text-red-500 hover:text-red-700 text-xl font-bold"
                >
                ✖
                </button>
            </div>
            <div className="p-4 text-black">
                <p>No hay productos en el carrito.</p>
            </div>
            </div>
        )}
        </div>
    );
    };

    export default Header;
