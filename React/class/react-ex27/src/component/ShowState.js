import {useMemo} from "react";

const getNumber = number => {
    console.log("[Notice] Change Number!");
    return number;
}

const getText = text => {
    console.log("[Notice] Change Text!");
    return text;
}

export default function ShowState({number, text}) {

    const showNumber = useMemo(() => getNumber(number), [number]);
    const showText = useMemo(() => getText(text), [text]);

    return (
        <div>
            <h1>Inner</h1>
            {showNumber} <br />
            {showText} <br />
        </div>
    )
}