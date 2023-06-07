import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../features/userSlice";
import "../styles/Login.css";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhotoUrl, setUserPhotoUrl] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const setName = (e) => {
    setUserName(e.target.value);
  };
  const setEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const setPassword = (e) => {
    setUserPassword(e.target.value);
  };
  const setPhotoUrl = (e) => {
    setUserPhotoUrl(e.target.value);
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPassword) {
      return alert("Please enter all your credentials");
    } else if (!userEmail.includes("@gmail.com")) {
      return alert("Email sohuld have @gmail.com");
    } else if (userPassword.length < 6) {
      return alert("A valid password is at least 6 chars long");
    } else if (!userPassword.match(/[a-z]/g) || !userPassword.match(/[A-Z]/g)) {
      return alert(
        "A valid password has at least one uppercase and one lowercase character"
      );
    } else if (!userPassword.match(/[0-9]/g)) {
      return alert("A valid password has at least one number");
    }
    dispatch(
      login({
        userName,
        userEmail,
        userPassword,
        userPhotoUrl,
      })
    );

    history.push("/list-tasks");
  };

  return (
    <>
      <div className="login__box">
        <div className="imageBx">
          <img src={ process.env.PUBLIC_URL + '/images/login.svg' } alt="loginsvgimage" />
        </div>
        <form className="form">
          <Input
            type="text"
            placeholder="Username"
            value={userName}
            inputFun={setName}
          />
          <Input
            type="email"
            placeholder="Email"
            value={userEmail}
            inputFun={setEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={userPassword}
            inputFun={setPassword}
            icon="password"
          />
          <Input
            type="url"
            placeholder="Photo url (optional)"
            value={userPhotoUrl}
            inputFun={setPhotoUrl}
          />
          <Button
            type="submit"
            btnClass="action__btn"
            text="Login"
            btnId="loginBtn"
            btnFun={loginUser}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
