import React from 'react';
import BasketStyle from '../style/BasketStyle';
import CartCountDisplay from './CountView';
import { CartCountProvider } from './BasketCount';

const BuyButton = () => {
    alert('구매가 완료되었습니다.');
}

const Basket = () => {
    return (
        <BasketStyle>
            <CartCountProvider>
                <CartCountDisplay />
                <button onClick={BuyButton}>구 매</button>
            </CartCountProvider>
        </BasketStyle>
    )
}

export default Basket;