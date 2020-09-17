import React from 'react';
import styled from 'styled-components';

const BasketStyle = styled.div`
    width: 1000px;
    height: 1500px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;     /* 페이지 중앙에 나타나도록 설정 */
  
    margin-top: 50px;
    margin-bottom: 32px;
`;

const Basket = () => {
    return (
        <div>
            <BasketStyle>
                어이어이 장바구니가 비었다.
            </BasketStyle>
        </div>
    )
}

export default Basket;