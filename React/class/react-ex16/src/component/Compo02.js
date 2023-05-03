import { useRef, useState } from "react";

function Compo02() {
    const [val1, setVal1] = useState("");

    const inputE1 = useRef(null);
    const onBtnClick = () => {
        inputE1.current.focus();
    };

    const getValue = () => {
        console.log(inputE1.val);
    }

    return (
        <div id="compo02Container">
            <input ref={inputE1} type="text"></input>
            <button onClick={onBtnClick}>focus to input</button>
            <button onClick={getValue}>Get data</button>
        </div>
    );
}

export default Compo02