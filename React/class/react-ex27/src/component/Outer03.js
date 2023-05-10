import React, { useState, useTransition } from "react";

let a = new Array(10000).fill(0);

export default function Outer03() {
    const [name, setName] = useState("");
    const [isPending, startTransaction] = useTransition();

    return (
        <div>
            <h1>Outer03</h1>
            <input onChange={(e) => { startTransaction(() => { setName(e.target.value) }); }} />
            {a.map((v, index) => {
                return <div key={index}>{name}</div>;
            })}
        </div>
    );
}