import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Card = () => {
    const { itemState, addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
        addToCart(item);
    };


    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {itemState.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                    <img
                        className="w-full h-48 object-cover"
                        src={item.imageUrl}
                        alt={item.name}
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700 font-bold">${item.price}</p>
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-lg font-bold rounded mt-4 transition-colors duration-200"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
