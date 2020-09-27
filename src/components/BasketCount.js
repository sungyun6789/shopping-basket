import React from 'react';
import cartcount from './dummy-data/DummyData';

const CartCountDisplay = () => {
    return (
        <div>
            현재 장바구니에 담긴 수: {cartcount}
        </div>
    )
};

export default CartCountDisplay;