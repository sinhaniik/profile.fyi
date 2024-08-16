/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { CartContext } from '../context/cartContext';



const CartItem = (props) => {

    console.log("props inside CartItem", props)

    const { item } = props
    const { updateQuantity, deleteFromCart } = useContext(CartContext);

    return (
        <div className="flex items-center py-4 border-b">
            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
            <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-gray-700 font-bold"
                    >
                        -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700 font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                    onClick={() => deleteFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;