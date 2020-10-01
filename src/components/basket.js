import React from 'react';
import BasketStyle from '../style/BasketStyle';
import CartCountDisplay from './CountView';

const BuyButton = () => {
    alert('구매가 완료되었습니다.');
}

const Basket = () => {
    return (
        <BasketStyle>
            <CartCountDisplay />
            <button onClick={BuyButton}>구 매</button>
        </BasketStyle>
    )
}

export default Basket;