import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.js';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import cat4 from './img/cat4.jpg';
import cat5 from './img/cat5.jpg';
import cat6 from './img/cat6.jpg';
import cat7 from './img/cat7.jpg';

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

function ItemList() {
    const [number, setNumber] = useState(1);
    const [img, setImg] = useState(['']);

    const Add = () => {
        setNumber(number + 1);

        console.log(number + '마리');
    }

    return (
        <ListBlock>
            <div className="Item">
                <div className="head">
                    <div className="item-container">
                        <div className="body">
                            <img src={cat1} alt="cat" />
                            <p className="name"><b>우주최강고양이 우최고</b></p>
                            <p className="age">4살입니다</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat5} alt="cat" />
                            <p className="name"><b>현피킹 김고양</b></p>
                            <p className="age">6살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat4} alt="cat" />
                            <p className="name"><b>고양이 어디십니까</b></p>
                            <p className="age">7살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat6} alt="cat" />
                            <p className="name"><b>장화신은 고양이</b></p>
                            <p className="age">127살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat3} alt="cat" />
                            <p className="name"><b>고양이 그립다</b></p>
                            <p className="age">99살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat1} alt="cat" />
                            <p className="name"><b>경기도 고양시</b></p>
                            <p className="age">8살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat2} alt="cat" />
                            <p className="name"><b>실례지만 어데 고씹니까?</b></p>
                            <p className="age">12살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat1} alt="cat" />
                            <p className="name"><b>고용히해</b></p>
                            <p className="age">-9살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="body">
                            <img src={cat7} alt="cat" />
                            <p className="name"><b>고양이는 울때 고양고양</b></p>
                            <p className="age">1살입니다.</p>
                            <button onClick={Add}>장바구니에 넣기</button>
                        </div>
                    </div>
                </div>
            </div>
        </ListBlock>
    );
};
export default ItemList;