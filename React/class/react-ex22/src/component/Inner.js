import { UserContext } from "../App";
import { useContext } from "react";

export default function Inner() {
    const {num, setNum} = useContext(UserContext);

    const increment = () => {
        setNum(i => i+1);
    };

    return (
        <div>
            <h1>Inner component</h1>
            <p>Current Num : {num}</p>
            <button onClick={increment}>+1</button>
        </div>
    );
}