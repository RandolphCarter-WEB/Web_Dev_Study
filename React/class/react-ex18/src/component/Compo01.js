import { useState } from "react";

export default function Compo01() {
    const [num, setNum] = useState(0);

    const increaseNum = () => {
        setNum(n => ++n);
    }

    const decreaseNum = () => {
        setNum(n => --n);
    }

    return (
        <div>
            <h3>count : {num}</h3>
            <button onClick={increaseNum}>+</button>
            <button onClick={decreaseNum}>-</button>
        </div>
    );
}