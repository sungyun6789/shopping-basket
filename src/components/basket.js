import React from 'react';
import styled from 'styled-components';
import Buy from './ItemList';

const BasketStyle = styled.div`
    text-align: center;
    padding-top: 50px;

    button {
        background: #448aff;

        color: white;
        font-size: 32px;
        margin-top: 883px;
        border: 2px solid black;
        border-radius: 10px;

        width: 1000px;
        height: 50px;

        :hover {
            transition: color 0.2s;
            color: black;
        }
    }
`;

const BuyButton = () => {
    alert('구매가 완료되었습니다.');
}

const Basket = () => {
    const number = 1;
    return (
        <BasketStyle>
            <div>
                장바구니에 담겨진 개수: {number}
            </div>
            <button onClick={BuyButton}>구 매</button>
        </BasketStyle>
    )
}

export default Basket;