import "./TextareaField.scss";
import { useEffect, useState } from "react";
import error from "../../../assets/Icons/error-24px.svg";

const TextareaField = ({ inputName, valid, label, value, setValue }) => {
  const [textarea, setTextarea] = useState("");

  const changeTextarea = (event) => {
    setTextarea(event.target.value);
    setValue(event.target.value)
  };

  return (
    <div className="form">
      <div className="form__field-textarea-div">
        <label className="form__field-textarea-label" htmlFor={inputName}>
          {label}
        </label>
        {textarea === "" && valid === false ? (
          <div>
            <textarea
              required
              value={value}
              className="form__field-textarea"
              placeholder="Please enter a brief item description..."
              type="text"
              name={inputName}
            />
            <div className="form__error-div">
              <img className="form__error-icon" src={error} alt="error icon" />
              <p className="form__error-message">This field is required</p>
            </div>
          </div>
        ) : (
          <textarea
          value={value}
            onChange={changeTextarea}
            className="form__field-textarea"
            placeholder="Please enter a brief item description..."
            type="text"
            name={inputName}
          />
        )}
      </div>
    </div>
  );
};

export default TextareaField;
