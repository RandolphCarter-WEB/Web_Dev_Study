import "../styles/Button.css";
const Button = ({ text, title, type, btnClass, btnId, btnFun }) => {
  return (
    <button
      type={type}
      title={title ? title : null}
      className={btnClass}
      id={btnId}
      onClick={btnFun}
    >
      {text}
    </button>
  );
};

export default Button;
