import React, { useState, createContext } from 'react';

export const CartContext = createContext(0);

const CartCount = () => {
    const [count, setCount] = useState(0);
    setCount(count + 1);
    return (
        <div>
            <CartContext.Provider value={count} />
        </div>
    );
};

export default CartCount;