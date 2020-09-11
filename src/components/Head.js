import React from 'react';
import styled from 'styled-components';

const HeadBlock = styled.div`
    padding-top: 30px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    p {
        margin: 0;
        font-size: 36px;
        color: #00e676;
    }
`;

function Head() {
    return (
        <HeadBlock>
            <b><p>사지말고 입양하세요 공익광고는 아니고 공익인 -성윤-</p></b>
        </HeadBlock >
    );
};

export default Head;