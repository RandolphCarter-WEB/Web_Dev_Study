import { useEffect, useState } from "react";

export default function Compo01() {
    const [cnt1, setcnt1] = useState(0);
    const [cnt2, setcnt2] = useState(0);

    const increaseCnt1 = () => {
        setcnt1(i => i+1);
    }

    const increaseCnt2 = () => {
        setcnt2(i => i+1);
    }

    useEffect(() => {
        console.log("Compo01 reRender!")
    }, [cnt1, cnt2]);

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