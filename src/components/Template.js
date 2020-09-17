import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Template.scss';

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

const onClick = (e) => {
    console.clear();
    alert('결제가 완료되었습니다.');
}

const Template = ({ children }) => {

    return (
        <div>
            <TemplateBloak>
                <div className="templatestyle">
                    <NavLink exact to="/"
                        style={{ textDecoration: 'none', color: 'black' }}>
                        제품목록
                    </NavLink>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <NavLink exact to="/Basket" style={{ textDecoration: 'none', color: 'black' }}>장바구니</NavLink>
                    <button onClick={onClick} className="buttonstyle">결제</button>
                </div>
                {children}
            </TemplateBloak>
        </div >
    )
};

export default Template;