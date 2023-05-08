import { useState } from 'react';
import Inner01 from './Inner01';

export default function Outter01() {
    const [num, setNum] = useState(0);

    return (
        <div>
            <h1>Outter01</h1>
            <p>Num : {num}</p>
            <button onClick={() => setNum(state => state + 1)}>+1</button>
            <Inner01 />
        </div>
    )
}