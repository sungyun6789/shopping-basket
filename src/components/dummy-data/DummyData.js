import React, { useState } from 'react';
import ContextProvider from '../BasketCount';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import cat4 from './img/cat4.jpg';
import cat5 from './img/cat5.jpg';
import cat6 from './img/cat6.jpg';
import cat7 from './img/cat7.jpg';


const DummyData = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="Item">
            <div className="head">
                <div className="item-container">
                    <div className="body">
                        <img src={cat1} alt="cat" />
                        <p className="name"><b>우주최강고양이 우최고</b></p>
                        <p className="age">4살입니다</p>
                        <button onClick={ContextProvider}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat5} alt="cat" />
                        <p className="name"><b>현피킹 김고양</b></p>
                        <p className="age">6살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat4} alt="cat" />
                        <p className="name"><b>고양이 어디십니까</b></p>
                        <p className="age">7살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat6} alt="cat" />
                        <p className="name"><b>장화신은 고양이</b></p>
                        <p className="age">127살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat3} alt="cat" />
                        <p className="name"><b>고양이 그립다</b></p>
                        <p className="age">99살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat1} alt="cat" />
                        <p className="name"><b>경기도 고양시</b></p>
                        <p className="age">8살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat2} alt="cat" />
                        <p className="name"><b>실례지만 어데 고씹니까?</b></p>
                        <p className="age">12살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat1} alt="cat" />
                        <p className="name"><b>고용히해</b></p>
                        <p className="age">-9살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>

                <div className="item-container">
                    <div className="body">
                        <img src={cat7} alt="cat" />
                        <p className="name"><b>고양이는 울때 고양고양</b></p>
                        <p className="age">1살입니다.</p>
                        <button onClick={() => setCount(count + 1)}>장바구니에 넣기</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DummyData;