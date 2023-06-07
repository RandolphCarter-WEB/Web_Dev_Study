import "../styles/TodoItem.css";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, updateCheckBox } from "../features/todoSlice";
import { RiDeleteBin6Line, RiPencilLine, RiEyeLine } from "react-icons/ri";
import Button from "./Button";

const TodoItem = forwardRef((props, ref) => {
  const { title, desc, id, status } = props;
  const [todoStatus, setTodoStatus] = useState(false);
  const checkboxRef = useRef("");
  const dispatch = useDispatch();

  const getCheckboxStatus = () => {
    dispatch(
      updateCheckBox({
        id,
      })
    );
  };

  const deleteTodoItem = () => {
    // const finalDelete = window.confirm(
    //   "Are you sure you want to delete this item"
    // );
    // if (!finalDelete) {
    //   return;
    // }
    dispatch(deleteTodo({ id }));
  };

  useEffect(() => {
    if (status === "Completed") {
      setTodoStatus(true);
      checkboxRef.current.checked = true;
    } else if (status === "Active") {
      setTodoStatus(false);
      checkboxRef.current.checked = false;
    }
  }, [status]);

  return (
    <div
      ref={ref}
      className="todo__item"
      id={todoStatus ? "completed__todo" : null}
    >
      <div className={todoStatus ? "completeTodo__noty" : "completed"}>
        <p>Completed!!</p>
      </div>
      <div className="todo__head">
        <Link className="link" to={`/details/${id}`}>
          <h3> {title.length >= 15 ? title.slice(0, 15) + "..." : title} </h3>
        </Link>
        <div>
          <input
            type="checkbox"
            className="checkbox__input"
            onChange={getCheckboxStatus}
            ref={checkboxRef}
          />
        </div>
      </div>
      <p> {desc.length >= 200 ? desc.slice(0, 200) + "..." : desc} </p>
      <div className="action__box todo--list--action--box">
        <Link to={`/details/${id}`} className="link__btn">
          <Button
            type="btn"
            btnClass="small__btn todo--btn"
            btnId="readBtn"
            text={<RiEyeLine />}
            title="Read Todo"
          />
        </Link>
        <Link to={`/edit-task/${id}`} className="link__btn">
          <Button
            type="btn"
            btnClass="small__btn todo--btn"
            btnId="updateBtn"
            text={<RiPencilLine />}
            title="Update Todo"
          />
        </Link>
        <Button
          type="btn"
          btnClass="small__btn todo--btn"
          btnId="deleteBtn"
          text={<RiDeleteBin6Line />}
          title="Delete Todo"
          btnFun={deleteTodoItem}
        />
      </div>
    </div>
  );
});

export default TodoItem;
