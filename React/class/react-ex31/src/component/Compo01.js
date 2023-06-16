import { useEffect, useState } from "react";
import axios from "axios";

export const Compo01 = () => {
    const [todoList, setTodoList] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => { setTodoList(res.data); })
            .catch(() => { setErr("[SYSTEM] ERROR to axios get data."); })
    }, []);

    return (
      <div>
          <h1>Show Todo List</h1>
          {err ? (
              <p>{err}</p>
          ) : (
              <ul>
                  {todoList.map(({ id, title }) => (
                      <li key={id}>{title}</li>
                  ))}
              </ul>
          )}
      </div>
    );
}