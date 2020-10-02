import styled from 'styled-components';

const ListBlock = styled.div`
img {
    width: 265px;
    height: 130px;
    border-radius: 8% 8% 0 0;
}

.head {
    margin-top: 30px;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    align-content: stretch;
}

.Item {
    height: 832px;
}

.body {
    width: 265px;
    height: 230px;
    background: white;
    border: 0.1px solid #e0e0e0;
    border-radius: 8%;
}

p {
    width: 200;
    height: 20;
}

b {
    font-size: 18px;
}

.name {
    height: 10px;
    margin-top: 5px;
    margin-left: 20px;
    text-align: left;
}

.age {
    height: 10px;
    margin-left: 20px;
    text-align: left;
    font-size: 14px;
    font-weight: lighter;

    transition: color 0.5s;
}

button {
    font-size: 12px;
    padding: 2px;
    height:20px;
    width:100px;
    margin-bottom: 15px;
    margin-left: 130px;
    color: #00e676;
    background: white;
    border: 1px solid #00e676;
    font-size: 12px;
}

button:hover {
    transition: color 0.3s;
    color: #f48fb1; 
}

.item-container {
    border-radius: 8%;
    box-shadow: 1px 1px 1px #efebe9;
}

.item-container:hover {
    transition: 0.3s;
    box-shadow: 8px 8px 8px 0px #bdbdbd;
}
`;

export default ListBlock;