import React, { useState, useDeferredValue } from "react";

let a = new Array(10000).fill(0);

export default function Outer04() {
    const [name, setName] = useState("");
    let state = useDeferredValue(name);

    return (
        <div>
            <h1>Outer03</h1>
            <input onChange={(e) => { setName(e.target.value); }} />
            {a.map((v, index) => {
                return <div key={index}>{state}</div>;
            })}
        </div>
    );
}