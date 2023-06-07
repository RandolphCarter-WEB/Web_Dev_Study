import "../styles/EmptyTodo.css";
const EmptyTodo = () => {
  return (
    <div className="empty__todoBx">
      <div className="empty__todoBx__image__wrapper">
        <img
          className="empty__todoBx__image"
          src={ process.env.PUBLIC_URL + '/images/notodo04.svg' }
          alt="nodata.svg"
        />
        <p className="empty__todoBx__desc">You don't have any task todo.</p>
      </div>
    </div>
  );
};

export default EmptyTodo;
