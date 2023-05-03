import { useEffect } from "react";

export default function Compo06({setPageNum}) {

    useEffect(() => {
        console.log("innerCompo Start Logic");
        return () => {
            console.log("innerCompo Fin.");
        }
    }, []);

    const exchangePage = () => {
        setPageNum(n => !n);
    }

    return (
        <div>
            <h1>Compo06</h1>
            <button onClick={exchangePage}>Button</button>
        </div>
    );
}