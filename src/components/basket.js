import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                나랑께
            </BasketStyle>
        </div>
    )
}

export default Basket;