import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TemplateBloak = styled.div`
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

const listStyle = styled.div`
    text-align: center;
    text-decoration: none;
    width: 100%;
    line-height: 70px;
    margin: 8px;
    padding: 4px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    background-color: #42a5f5;
    border: none;
    border-radius: 7.7px;
    font-family: 'Gothic A1', sans-serif;

    transition: color 0.5s;
    :hover {
      color: black; 
    }
`;

const Template = ({ children }) => {

    return (
        <div>
            <TemplateBloak>
                <Link to='/' style='listStyle'>제품목록</Link>
                <Link to="/basket">장바구니</Link>
                {children}
            </TemplateBloak>
        </div>
    )
};
export default Template;