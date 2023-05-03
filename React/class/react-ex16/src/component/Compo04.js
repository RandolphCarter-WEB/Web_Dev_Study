import { useEffect, useState } from "react";

function Compo04() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);

    useEffect(() => {
        console.log(`[${val1}]Compo04 Logic`);
        console.log(`[${val2}]Compo04 Logic`);

        return () => {
            console.log(`[Compo04]reset Logic`);
        }
    }, [val1]);

    const setStateEvent1 = () => {
        setVal1(v => v+1);
    }

    const setStateEvent2 = () => {
        setVal2(v => v+1);
    }

    return (
        <div id="Compo04Container">
            <h1>Compo04 Component</h1>
            <button onClick={setStateEvent1}>reRender01</button>
            <button onClick={setStateEvent2}>reRender02</button>
        </div>
    )
}

export default Compo04;