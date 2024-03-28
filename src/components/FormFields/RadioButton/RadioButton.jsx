import React from "react";
import "../RadioButton/RadioButton.scss";

const RadioButton = ({ label, value, onChange, name, dataName }) => {
  return (
    <>
    <input type="radio" checked={value} value={dataName} onChange={onChange} name={name} className="radio"/>
    <label className="radio-label">{label}</label>
    </>
  );
};

export default RadioButton;
