import React from 'react';
import { Link } from 'react-router-dom';
import HeadBlock from '../style/HeadStyle';

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