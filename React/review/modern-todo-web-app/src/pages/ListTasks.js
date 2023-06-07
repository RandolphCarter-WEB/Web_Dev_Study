import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";
import TodoItem from "../components/TodoItem";
import { selectTodo, removeAllTodo } from "../features/todoSlice";
import EmptyTodo from "../components/EmptyTodo";
import Button from "../components/Button";
import Input from "../components/Input";

const ListTasks = () => {
  const [searchTodo, setSearchTodo] = useState("");
  const todosList = useSelector(selectTodo);
  const [todos, setTodos] = useState(todosList);
  const dispatch = useDispatch();

  const filterAllTodo = () => {
    setSearchTodo("");
    setTodos(todosList);
  };

  const filterActiveTodo = () => {
    setSearchTodo("");
    setTodos(
      todosList.filter((todo) => {
        return todo.status === "Active";
      })
    );
  };

  const filterCompletedTodo = () => {
    setTodos(
      todosList.filter((todo) => {
        return todo.status === "Completed";
      })
    );
    setSearchTodo("");
  };

  const removeAllItems = () => {
    // const finalDelete = window.confirm("Want to delete all todo? Sure? ");
    // if (!finalDelete) {
    //   return;
    // }
    dispatch(removeAllTodo());
  };

  const getSearchValue = (e) => {
    setSearchTodo(e.target.value);
  };

  useEffect(() => {
    setTodos(
      todosList.filter((todo) => {
        return (
          todo.title.includes(searchTodo) ||
          todo.desc.includes(searchTodo) ||
          todo.title.includes(searchTodo.toLowerCase()) ||
          todo.title.includes(searchTodo.toUpperCase()) ||
          todo.desc.includes(searchTodo.toLowerCase()) ||
          todo.desc.includes(searchTodo.toUpperCase())
        );
      })
    );
  }, [searchTodo, todosList]);
  return (
    <>
      <Link to="/" className="link">
        {todosList.length < 1 ? (
          <Button
            type="btn"
            text="Add task"
            btnClass="go__to__list"
            btnId="addTodo"
          />
        ) : (
          <Button
            type="btn"
            text="Add More task"
            btnClass="go__to__list"
            btnId="addTodo"
          />
        )}
      </Link>
      {!todosList.length < 1 && (
        <>
          <Button
            btnId="removeAllTodo"
            btnClass="go__to__list"
            text="remove all todos"
            btnFun={removeAllItems}
            type="btn"
          />
          <Input
            placeholder="Search for todos"
            type="text"
            value={searchTodo}
            inputFun={getSearchValue}
          />
          <div className="action__box filter--btn">
            <Button
              btnId="updateBtn"
              btnClass="action__btn"
              text="All"
              type="btn"
              btnFun={filterAllTodo}
            />
            <Button
              btnId="updateBtn"
              btnClass="action__btn"
              text="Active"
              type="btn"
              btnFun={filterActiveTodo}
            />
            <Button
              btnId="updateBtn"
              btnClass="action__btn"
              text="Completed"
              type="btn"
              btnFun={filterCompletedTodo}
            />
          </div>
          {todos.length < 1 && (
            <p
              style={{
                color: "#ffffff",
                marginTop: "80px",
                textAlign: "center",
                fontSize: "17px",
                wordWrap: "break-word",
              }}
            >
              Not such todo is available.
            </p>
          )}
        </>
      )}

      <FlipMove
        staggerDelayBy={120}
        appearAnimation="accordionHorizontal"
        enterAnimation="accordionHorizontal"
        leaveAnimation="elevator"
        duration={250}
        easing="ease-in-out"
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
          />
        ))}
      </FlipMove>
      {todosList.length < 1 && <EmptyTodo />}
    </>
  );
};

export default ListTasks;
