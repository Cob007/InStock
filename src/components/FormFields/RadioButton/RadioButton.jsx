import React from "react";
import "../RadioButton/RadioButton.scss";

const RadioButton = ({ label, value, onChange, name, dataName, setValue,check }) => {
  
  const changeRadioButton = (event) => {
    setValue(event.target.value)
  } 

  return (
    <>
    <input type="radio" checked={check} value={dataName} onChange={onChange} name={name} className="radio"/>
    <label className="radio-label">{label}</label>
    </>
  );
};

export default RadioButton;
