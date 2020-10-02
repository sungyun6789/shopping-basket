import styled from 'styled-components';

const BasketStyle = styled.div`
    text-align: center;
    padding-top: 50px;

    button {
        background: #448aff;

        color: white;
        font-size: 32px;
        margin-top: 883px;
        border: 2px solid black;
        border-radius: 10px;

        width: 1000px;
        height: 50px;

        :hover {
            transition: color 0.2s;
            color: black;
        }
    }
`;

export default BasketStyle;