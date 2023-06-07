import { Link } from "react-router-dom";
import "../styles/PageNotFound.css";
import Button from "../components/Button";
const PageNotFound = () => {
  return (
    <>
      <div className="no__page__found__image__box">
        <img src={process.env.PUBLIC_URL + '/images/pageNotFound.svg' } alt="404__image" />
      </div>
      <Link to="/list-tasks" className="link">
        <Button
          type="btn"
          text="go home"
          btnId="goHomeBtn"
          btnClass="go__to__list"
        />
      </Link>
    </>
  );
};

export default PageNotFound;
