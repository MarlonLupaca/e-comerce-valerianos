function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Carrito</h2>
            {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
            ) : (
            <ul>
                {cart.map((item, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center border-b py-2"
                >
                    <div>
                    <p>{item.name}</p>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                    </div>
                    <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                    Quitar
                    </button>
                </li>
                ))}
            </ul>
            )}
            <div className="mt-4">
            <p className="font-bold">Total: ${total}</p>
            </div>
        </div>
        );
    }

export default Cart;
