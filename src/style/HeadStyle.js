import styled from 'styled-components';

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

export default HeadBlock;