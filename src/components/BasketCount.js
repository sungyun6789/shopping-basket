import React, { useState } from 'react';

const CartCount = () => {
    const a = [count, setCount] = useState(0);

    setCount(count + 1);

    function b() {
        return (
            <div>
                {`고양이 ${count}마리`}
            </div>
        );
    };

};

export default CartCount;