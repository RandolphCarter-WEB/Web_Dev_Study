import Inner from "./Inner";
import { UserContext } from "../App";
import {useContext} from "react";

export default function Outter() {
    const {num, setNum} = useContext(UserContext);
    
    return (
        <div>
            <h1>Outter Component</h1>
            <p>Current Num : {num}</p>
            <Inner></Inner>
        </div>
    );
}