import React from 'react';
import ContextProvider from './BasketCount';
import cartcount from './CountContext';

const CartCountDisplay = () => {
    return (
        <div>
            현재 장바구니에 담긴 수:
            <ContextProvider.Consumer value={cartcount} />
        </div>
    )
};

export default CartCountDisplay;