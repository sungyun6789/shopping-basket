import React, { useState } from 'react';

export const CartButton = () => {
    const [cartcount, setCartCount] = useState(0);

    setCartCount(cartcount + 1);

}

const CartCountDisplay = () => {
    return (
        <div>
            현재 장바구니에 담긴 수: {cartcount}
        </div>
    )
};

export default CartCountDisplay;