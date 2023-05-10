import { useState } from "react";
import ShowState from "./ShowState";

export default function Outer() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const increaseNumber = () => { setNumber(num => ++num); }
    const decreaseNumber = () => { setNumber(num => --num); }
    const onChangeText = (e) => { setText(e.target.value); }

    return (
        <div>
            <h1>Outer</h1>
            <div>
                <input type="number" placeholder="Number" onChange={onChangeText} value={number}/>
                <input type="text" placeholder="Last name" onChange={onChangeText} value={text}/> <br />

                <button onClick={increaseNumber}>Increase</button>
                <button onClick={decreaseNumber}>Decrease</button>
            </div>

            <ShowState number={number} text={text}></ShowState>
        </div>
    )
}