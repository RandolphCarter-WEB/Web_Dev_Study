import { useSelector, useDispatch } from'react-redux';
import { useState } from 'react';
import { increment, decrement } from '../store/numStore';
import { changeStr } from '../store/strStore';

export default function Inner() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [Num, setNum] = useState(state.num);
    const [Str, setStr] = useState(state.str);

    const incrementNum = () => {
        setNum(Num + 1);
        dispatch(increment());
    };

    const decrementNum = () => {
        setNum(Num - 1);
        dispatch(decrement());
    };

    const changeStr = (e) => {
        const newStr = e.target.value;
        setStr(newStr);
        dispatch(changeStr(newStr));
    };

    return (
        <div>
            <h1>Inner Component</h1>
            <ul>
                <li>number : {Num}</li>
                <li><button onClick={incrementNum}>+1</button></li>
                <li><button onClick={decrementNum}>-1</button></li>
                <br />

                <input type="text" id="str" value={Str} onChange={changeStr} />
            </ul>
        </div>
    );
}