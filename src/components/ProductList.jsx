const products = [
    { id: 1, name: 'Pastel de Chocolate', price: 15 },
    { id: 2, name: 'Red Velvet', price: 18 },
    { id: 3, name: 'Tres Leches', price: 20 },
    ];

    function ProductList({ addToCart }) {
        return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Productos</h2>
            <ul>
            {products.map((product) => (
                <li
                key={product.id}
                className="flex justify-between items-center border-b py-2"
                >
                <div>
                    <p>{product.name}</p>
                    <p className="text-gray-500 text-sm">${product.price}</p>
                </div>
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                >
                    Añadir al carrito
                </button>
                </li>
            ))}
            </ul>
        </div>
        );
    }
    
export default ProductList;
