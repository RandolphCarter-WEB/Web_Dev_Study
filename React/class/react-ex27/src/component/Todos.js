import { memo } from 'react';

function Todos({todos, addTodos}) {
    return (
        <div>
            <h1>Todos</h1>
            {todos.map((todos, index) => {
                return <p key={index}>{todos}</p>
            })}
            <button onClick={addTodos}>Add Todo</button>
            <hr />
        </div>
    )
}

export default memo(Todos);