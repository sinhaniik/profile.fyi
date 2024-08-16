/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';

const Cart = (props) => {
    const { cart, removeAll } = useContext(CartContext);

    const { onClose } = props

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full shadow-xl flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-2xl font-bold flex items-center">
                        Cart
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &#x2715;
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-4">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="p-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-semibold">Total:</span>
                        <span className="text-xl font-bold">${cart.reduce((total, item) => total + item.price * item.quantity, 0)} </span>
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mb-2"
                    >
                        Checkout
                    </button>
                    <button
                        onClick={removeAll}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;