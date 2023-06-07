import Button from "./Button";
import "../styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { removeAllTodo } from "../features/todoSlice";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(removeAllTodo());
    localStorage.clear();
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo__box">
          <NavLink to="/" className="link">
            <div className="logo">
              <div className="logo__image">
                <img src={ process.env.PUBLIC_URL + '/images/notodo01.svg' } alt="undraw.co_notodo.svg" />
              </div>
              <h3 className="logo__title">TodoNote</h3>
            </div>
          </NavLink>
        </div>
        {user && (
          <>
            <div className="user__box" title={user.userName}>
              {!user.userPhotoUrl ? (
                <div className="user__avtar">{user && user.userName[0]}</div>
              ) : (
                <img
                  className="user__image"
                  src={user.userPhotoUrl}
                  alt="userAvtar"
                />
              )}
            </div>
            <Button
              type="btn"
              btnClass="logout__btn"
              btnId="logoutBtn"
              text="logout"
              title="Logout"
              btnFun={logoutUser}
            />
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
