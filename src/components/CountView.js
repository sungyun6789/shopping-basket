import React, { useContext } from 'react';
import { CartContext } from './BasketCount';

export default function CartCountDisplay() {
    const count = useContext(CartContext);
    return (
        <div>
            {`고양이 ${count}마리`}
        </div>
    );
};

