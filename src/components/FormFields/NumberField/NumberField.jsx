import "../NumberField/NumberField.scss";
import { useState, useEffect, useRef } from "react";
import error from "../../../assets/Icons/error-24px.svg";

const NumberField = (props) => {
  const [change, setChange] = useState("");

  const changeCounter = (event) => {
    setChange(event.target.value);
    props.setValue(event.target.value)
  };

  return (
    <div className="form">
      <div className="form__field-number-div">
        <label className="form__field-number-label" htmlFor={props.inputName}>
          {props.label}
        </label>
        {change === "" && props.valid === false ? (
          <div>
            <input
            value={props.value}
              required
              className="form__field-number-input"
              placeholder="0"
              type="number"
              name={props.inputName}
              value={props.value}
            />
            <div className="form__error-div">
              <img className="form__error-icon" src={error} alt="error icon" />
              <p className="form__error-message">This field is required</p>
            </div>
          </div>
        ) : (
          <input
          value={props.value}
            onChange={changeCounter}
            className="form__field-number-input"
            placeholder="0"
            type="number"
            name={props.inputName}
            value={props.value}
          /> 
        )}
      </div>
    </div>
  );
};

export default NumberField;
