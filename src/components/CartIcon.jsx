import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext'; // Adjust this import path as needed
import Cart from './Cart';
import cartImage from '../../public/cart.svg'

const CartIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const { cart } = useContext(CartContext);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        if (totalQuantity > 0) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 300);
            return () => clearTimeout(timer);
        }
    }, [totalQuantity]);

    const toggleCart = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="relative">
            <img src={cartImage} alt="Cart" onClick={toggleCart} className='cursor-pointer mb-4' />
            {totalQuantity > 0 && (
                <div
                    className={`absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ${animate ? 'animate-bounce' : ''
                        }`}
                >
                    {totalQuantity}
                </div>
            )}

            {isOpen && <Cart onClose={toggleCart} />}
        </div>
    );
};

export default CartIcon;