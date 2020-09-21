import React from 'react';
import { Route } from 'react-router-dom';
import Basket from './Basket';
import styled from 'styled-components';
import ItemList from './ItemList';

const TemplateBloak = styled.div`
    width: 1000px;
    height: 1000px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto;     /* 페이지 중앙에 나타나도록 설정 */
  
    margin-top: 50px;
    margin-bottom: 32px;

    text-align: center;
    font-size: 16px;
    border: none;
    font-family: 'Gothic A1', sans-serif;
`;

const Template = () => {
    return (
        <div>
            <TemplateBloak>
                <Route exact path="/" component={ItemList} style={{ textDecoration: 'none', color: 'black' }} />
                <Route path="/basket" component={Basket} style={{ textDecoration: 'none', color: 'black' }} />
            </TemplateBloak>
        </div >
    )
};

export default Template;