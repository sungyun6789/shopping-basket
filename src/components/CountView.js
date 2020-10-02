import React, { useContext } from 'react';
import { CartCount } from './BasketCount';

const CartCountDisplay = () => {
    const { count, setCount } = useContext(CartCount);
    return (
        <div>
            현재 장바구니에 담긴 수: {count}
        </div>
    )
};

export default CartCountDisplay;