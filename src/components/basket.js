import React from 'react';
import styled from 'styled-components';

const BasketStyle = styled.div`
    text-align: center;
    padding-top: 100px;
`;

const Basket = () => {
    return (
        <BasketStyle>
            <div>
                어이어이 장바구니가 비었다.
            </div>
        </BasketStyle>
    )
}

export default Basket;