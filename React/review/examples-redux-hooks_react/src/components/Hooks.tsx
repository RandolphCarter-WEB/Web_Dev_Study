import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Hooks() {


    const { counter }: any = useSelector((state: any) => state.root)
    const dispatch = useDispatch();


    return (
        <React.Fragment>
            <div>
                <div>
                    <h3>Basic Example of REDUX USING HOOKS</h3>
                </div>
                <div>
                    <h4>Counter: {counter}</h4>
                    <div><button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button></div>
                    <div><button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}