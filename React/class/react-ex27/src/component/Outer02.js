import React, { useState } from'react';

export default function Outer02() {
    const [count, setCount] = useState(0);

    
    function handleCount() {
        setCount(cnt => ++cnt);
    }
    return (
        <div>
            <h1>Outer</h1>
            <p>Count : {count}</p>
            <button onClick={handleCount}>Click</button>
        </div>
    )
}