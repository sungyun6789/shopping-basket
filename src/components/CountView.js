import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext(0);

export const CartCount = () => {
    const [count, setCount] = useState(0);
    setCount(count + 1);
    return (
        <div>
            <CartContext.Provider value={count} />
        </div>
    );
};

export default function CartCountDisplay() {
    const count = useContext(CartContext);
    return (
        <div>
            {`고양이 ${count}마리`}
        </div>
    );
};

