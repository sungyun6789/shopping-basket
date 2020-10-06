import React, { useState, createContext } from 'react';

const CountContext = createContext();

const Increase = () => {
    console.log('고양이' + count);
    const [count, setCount] = useState(0);
    const CartCount = () => count + 1;
    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                고양이: {count}마리
            </CountContext.Provider>
        </div>
    )
}

export default Increase;