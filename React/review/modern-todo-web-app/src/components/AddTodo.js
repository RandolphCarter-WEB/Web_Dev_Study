import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { selectUser } from "../features/userSlice";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const setTodoTitle = (e) => {
    setTitle(e.target.value);
  };

  const setTodoDesc = (e) => {
    setDesc(e.target.value);
  };

  const addTodoData = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      return alert("Please enter title and desc");
    } else if (title.length > 50) {
      return alert("A valid title has a max length of 50 chars");
    } else if (desc.length > 256) {
      return alert("A valid description has a max length of 256 chars");
    }
    dispatch(
      addTodo({
        title,
        desc,
        status: "Active",
        id: new Date().getTime().toString(),
      })
    );
    history.push("/list-tasks");
    setTitle("");
    setDesc("");
  };

  return (
    <>
      {user && (
        <>
          <div className="imageBx" id="addTodoimage">
            <img src={ process.env.PUBLIC_URL + '/images/addTodo01.svg' } alt="list-svg" />
          </div>
          <div className="input__box">
            <form className="form" style={{ padding: "0px" }}>
              <Input
                type="text"
                placeholder="Todo title here..."
                value={title}
                inputFun={setTodoTitle}
              />
              <Input
                type="text"
                placeholder="Todo description here..."
                value={desc}
                inputFun={setTodoDesc}
              />
              <Button
                btnId="addToListBtn"
                btnClass="action__btn"
                text="Add to list"
                btnFun={addTodoData}
                type="submit"
              />
            </form>
            <Link to="/list-tasks" className="link">
              <Button
                btnId="addTodo"
                btnClass="go__to__list"
                text="Go to todo list"
                type="btn"
              />
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default AddTodo;
