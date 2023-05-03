import { useEffect, useReducer } from "react";

const init = {count : 0};

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {count : state.count + 1};
        case "decrement":
            return {count : state.count - 1};
        default:
            throw new Error();
    }
}

export default function Compo02() {
    const [state, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        console.log("Compo02 render!");
    });

    return (
        <div>
            <h3>Count : {state.count}</h3>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
        </div>
    );
}