import { useState, useRef } from "react";
import "../styles/Input.css";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

const Input = ({ type, placeholder, value, inputFun, icon }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const inputTypeRef = useRef("");

  const passwordStatus = () => {
    setPassVisibility(!passVisibility);
    if (!passVisibility) {
      inputTypeRef.current.type = "text";
    } else {
      inputTypeRef.current.type = "password";
    }
  };

  return (
    <>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={inputFun}
          ref={inputTypeRef}
          autoComplete="true"
        />
        {icon && (
          <>
            {icon === "password" && (
              <>
                <div className="input__icon__box" onClick={passwordStatus}>
                  {!passVisibility ? (
                    <RiEyeCloseFill className="input__icon" id="closeEye" />
                  ) : (
                    <RiEyeFill className="input__icon" id="openEye" />
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
