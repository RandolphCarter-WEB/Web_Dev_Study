import { useState } from "react";

export default function Compo02({cnt1, setCnt1}) {
    const [cnt2, setCnt2] = useState(0);
    
    const increaseCnt1 = () => {
        setCnt1(i => i+1);
    }

    const increaseCnt2 = () => {
        setCnt2(i => i+1);
    };

    return (
        <div>
            <div>
                <h3>Current Count : <span>{cnt1}</span></h3>
                <button onClick={increaseCnt1}>+1</button>
            </div>

            <div>
                <h3>Current Count : <span>{cnt2}</span></h3>
                <button onClick={increaseCnt2}>+1</button>
            </div>
        </div>
    );
}