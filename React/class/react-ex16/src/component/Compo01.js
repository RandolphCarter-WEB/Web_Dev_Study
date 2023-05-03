import { useRef, useState } from "react";

function Compo01() {
    const [render, setRender] = useState(false);
    const countRef = useRef(0);
    let countVar = 0;

    console.log(`****** before render() countRef >> ${countRef.current}`);
    console.log(`****** before render() countVar >> ${countVar}`);

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log(`Ref up! ---> ${countRef.current}`);
    }

    const increaseVar = () => {
        countVar+=1;
        console.log(`Var up! ---> ${countVar}`);
    }

    const doRender = () => {
        setRender(prevrender => !prevrender);
    }

    return (
        <div id="Compo01Conatiner">
            <div>
                <p>Ref : {countRef.current}</p>
                <p>Var : {countVar}</p>

                <div>
                    <button onClick={increaseRef}>Ref Up!</button>
                    <button onClick={increaseVar}>Var Up!</button>
                    <button onClick={doRender}>Render!</button>
                </div>
            </div>
        </div>
    );
}

export default Compo01;