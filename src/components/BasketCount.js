import React, { useState } from 'react';

export const CountContext = React.createContext();

const ContextProvider = () => {
    const [cartcount, setCartCount] = useState(0);
    setCartCount(cartcount + 1);
    return (
        <CountContext.Provider value={{ cartcount, setCartCount }} />
    )
}

export default ContextProvider;