import React, { useState } from 'react';
import styled from 'styled-components';

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

const onClick = () => {
    alert('구매가 완료되었습니다.');
}

const Basket = () => {
    const [basket, setBasket] = useState(['']);

    return (
        <BasketStyle>
            <div>
                어이어이 장바구니가 비었다.
            </div>
            <button onClick={onClick}>구 매</button>
        </BasketStyle>
    )
}

export default Basket;