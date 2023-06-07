import "../styles/Todo.css";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { selectTodo, deleteTodo } from "../features/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";

const Details = () => {
  const [todoData, setTodoData] = useState(null);
  const todoItem = useSelector(selectTodo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

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
    padding: "0px 2px",
  };

  useEffect(() => {
    const itemData = todoItem.filter((elem) => {
      return elem.id === id;
    });
    setTodoData(itemData);
  }, [id, todoItem]);

  const deleteTodoItem = () => {
    dispatch(
      deleteTodo({
        id,
      })
    );
    history.push("/list-tasks");
  };

  return (
    <>
      <div className="box" style={boxStyle}>
        <div className="todo__detailHead" style={detailHeadStyle}>
          <small>Item Id: {todoData && todoData[0].id}</small>
          <small>Status: {todoData && todoData[0].status}</small>
        </div>
        <div className="todo">
          <h3
            style={{
              margin: "15px 0px 8px",
              lineHeight: "1.4",
              wordWrap: "break-word",
            }}
          >
            Title: {todoData && todoData[0].title}
          </h3>
          <p
            style={{
              lineHeight: "1.4",
              wordWrap: "break-word",
            }}
          >
            Description: {todoData && todoData[0].desc}
          </p>
        </div>
        <div className="action__box filter--btn">
          <Button
            btnClass="go__to__list"
            btnId="mainUpdateBtn"
            type="btn"
            text="delete todo"
            btnFun={deleteTodoItem}
          />
          <Link to={`/edit-task/${id}`} className="link">
            <Button
              btnClass="go__to__list"
              btnId="mainUpdateBtn"
              type="btn"
              text="edit task"
              title="Go to list"
            />
          </Link>
        </div>
        {/* <Link to="/list-tasks" className="link" style={{flex: "1"}}>
          <Button
            btnClass="go__to__list"
            btnId="goToList"
            type="btn"
            text="go to list"
            title="Go to list"
          />
        </Link> */}
      </div>
    </>
  );
};

export default Details;
