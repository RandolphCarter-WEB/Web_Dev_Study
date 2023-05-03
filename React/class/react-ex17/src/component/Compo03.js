import { useEffect, useState } from "react";
import Compo02 from "./Compo02";

export default function Compo03() {
    const [cnt1, setCnt1] = useState(0);

    useEffect(() => {
        console.log("OutterCompo Logic!");
    })

    return (
        <div>
            <h1>This is OuterComponent Header</h1>
            <Compo02 cnt1={cnt1} setCnt1={setCnt1}></Compo02>
        </div>
    )
}