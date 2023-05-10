import React, { useState, useCallback } from "react";
import Todos from "./Todos";

export default function Outer01() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["default todos"]);

    const addTodos = useCallback(() => {
        setTodos(todo => setTodos([...todo, "new todos" ]));
    }, [todos]);

    const increment = () => {
        setCount(cnt => ++cnt);
    }

    return (
        <div>
            <h1>Outer01</h1>
            <Todos todos={todos} addTodos={addTodos} />

            <div>
                Count: {count} <br />
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}