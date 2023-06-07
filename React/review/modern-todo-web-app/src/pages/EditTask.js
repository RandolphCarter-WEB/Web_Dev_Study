import "../styles/Todo.css";
import { useEffect, useRef, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { updateTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import { useSelector } from "react-redux";
import { selectTodo } from "../features/todoSlice";

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const todos = useSelector(selectTodo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const refDetailData = useRef("");

  const boxStyle = {
    backgroundColor: "#5635df",
    maxWidth: "800px",
    marginTop: "100px",
    color: "#fff",
    borderRadius: "10px",
    paddingRight: "8px",
    paddingLeft: "8px",
    paddingBottom: "20px",
  };

  const detailHeadStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff",
    margin: "10px 0px 30px",
    padding: "0px 2px",
  };

  const updateTodoTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateTodoDesc = (e) => {
    setDesc(e.target.value);
  };

  const setUpdatedData = () => {
    if (!title || !title) {
      alert("You did'nt change any thing your data will remain same");
    }
    if (title.length > 50) {
      return alert("A valid updated title has a max length of 50 chars");
    } else if (desc.length > 120) {
      return alert("A valid updated description has a max length of 120 chars");
    }
    dispatch(updateTodo({ id, title, desc }));
    setTitle("");
    setDesc("");
    history.push("/list-tasks");
  };

  useEffect(() => {
    refDetailData.current = todos.filter((todo) => {
      return todo.id === id;
    });
    setTitle(refDetailData.current[0].title);
    setDesc(refDetailData.current[0].desc);
  }, [id, todos]);

  return (
    <>
      <div className="box" style={boxStyle}>
        <div className="todo__detailHead" style={detailHeadStyle}>
          <small>Item Id: {id}</small>
        </div>
        <Input
          placeholder="New title here..."
          type="text"
          inputFun={updateTodoTitle}
          value={title}
        />
        <Input
          placeholder="New description here..."
          type="text"
          inputFun={updateTodoDesc}
          value={desc}
        />
        <div className="action__box filter--todo">
          <Button
            type="btn"
            text="save changes"
            btnClass="go__to__list"
            btnId="mainUpdateBtn"
            btnFun={setUpdatedData}
          />
          <Link to="/list-tasks" className="link">
            <Button
              btnClass="go__to__list"
              btnId="mainUpdateBtn"
              type="btn"
              text="Go to list"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditTask;
