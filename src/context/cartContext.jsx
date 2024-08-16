/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
export const CartContext = createContext();
import APPDATA from '../appData';

export const CartProvider = ({ children }) => {

    const [itemState, setItemState] = useState(APPDATA.items);
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const deleteFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const removeAll = () => {
        setCart([]);
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteFromCart, removeAll, updateQuantity, itemState }}
        >
            {children}
        </CartContext.Provider>
    );
};
