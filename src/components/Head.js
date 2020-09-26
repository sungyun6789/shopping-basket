import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeadBlock = styled.div`
    padding-top: 30px;
    padding-left: 32px;
    padding-right: 32px;

    background: white;

    p {
        margin-top: 0;
        margin-bottom: 30px;
        font-size: 36px;
        color: #00e676;
    }

    border: 2px solid #00e676;
    border-radius: 16px;

    padding-bottom: 30px;
    margin: 0 auto;
    width: 940px;
    height: 100px;

    .link {
        color: black;
        transition: color 0.3s;
        :hover {
            color: #f48fb1;
        }
    }
`;

const Head = () => {
    return (
        <>
            <HeadBlock>
                <b><p>사지말고 입양하세요 공익광고가 아닌 공익 성윤</p></b>
                <Link to="/" style={{ marginRight: '30px', textDecoration: 'none' }} className="link">제품목록</Link>
                <Link to="/basket" style={{ textDecoration: 'none' }} className="link">장바구니</Link>
            </HeadBlock >
        </>
    );
};

export default Head;