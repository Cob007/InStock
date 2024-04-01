import React from "react";
import "../RadioButton/RadioButton.scss";

const RadioButton = ({ label, value, onChange, name, dataName, setValue }) => {
  
  const changeRadioButton = (event) => {
    setValue(event.target.value)
  } 

  return (
    <>
    <input type="radio" checked={value} value={dataName} onChange={onChange} name={name} className="radio"/>
    <label className="radio-label">{label}</label>
    </>
  );
};

export default RadioButton;
