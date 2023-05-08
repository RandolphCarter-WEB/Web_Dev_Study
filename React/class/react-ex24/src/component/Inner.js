import { useSelector, useDispatch } from'react-redux';
import {increaseNum, decreaseNum, increaseNumber, changeName, plusName} from "../store/store";

export default function Inner() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>This is Inner</h1>
            <ul>
                <li>number : {state.numStore}</li>
                <li>string : {state.strStore}</li>
                <li><button onClick={() => dispatch(increaseNum())}>+1</button></li>
                <li><button onClick={() => dispatch(decreaseNum())}>-1</button></li>
                <li><button onClick={() => dispatch(increaseNumber(3))}>+3</button></li>
                <li><button onClick={() => dispatch(changeName())}>change str</button></li>
                <li><button onClick={() => dispatch(plusName("str"))}>plus "str"</button></li>
            </ul>
        </div>
    );
}