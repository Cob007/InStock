import "../NumberField/NumberField.scss";
import { useState, useEffect, useRef } from "react";
import error from '../../../assets/Icons/error-24px.svg'


const NumberField = (props) => {
        const [change, setChange] = useState("");
      
        const changeCounter = (event) => {
          setChange(event.target.value);
        };
      
        console.log(props.valid);
      
        return (
          <div className="form">
            <div className="form__field-div">
              <label className="form__field-label" htmlFor={props.inputName}>
                {props.label}
              </label>
              {change === "" && props.valid === false ? (
                <div>
                  <input
                    required
                    className="form__field-input"
                    placeholder="0"
                    type="number"
                    name={props.inputName}
                  />
                  <div className="form__error-div">
                    <img className="form__error-icon" src={error} alt="error icon" />
                    <p className="form__error-message">This field is required</p>
                  </div>
                </div>
              ) : (
                <input
                  onChange={changeCounter}
                  className="form__field-input"
                  placeholder="0"
                  type="number"
                  name={props.inputName}
                />
              )}
            </div>
            </div>
        );
      };

export default NumberField