/*import React, { createContext, useState } from 'react';

export const CartCount = createContext();

const CountView = () => {
    const [count, setCount] = useState(0);
    setCount(count + 1);
    return (
        <CartCount.Provider value={{ count }} />
    );
};

export default CountView;*/


/*import React, { createContext, useState } from 'react';

const Context = createContext();    // context 를 만든다

const { Provider, Consumer: SampleConsumer } = Context;

const SampleProvider = () => {
    const [count, setCount] = useState(0);

    const actions = {
        setCount: (count) => setCount({ count })
    }

    const value = { count, actions };
    return (
        <Provider value={count}>
        </Provider>
    )
}
export {
    SampleProvider,
    SampleConsumer,
};*/

import React, { useState, createContext } from 'react';

const CartCount = createContext(0);

const CartCountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const basket = {
        count, setCount
    };

    return (
        <CartCount.Provider value={count}>
            {children}
        </CartCount.Provider>
    );
};

export {
    CartCountProvider,
    CartCount
};