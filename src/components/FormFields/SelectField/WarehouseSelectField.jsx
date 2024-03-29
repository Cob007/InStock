import "../SelectField/SelectField.scss";
import { useState } from "react";
import error from "../../../assets/Icons/error-24px.svg";

const WarehouseSelectField = (props) => {
  const warehouseData = [
    { name: "Jersey", value: "Jersey" },
    { name: "Manhattan", value: "Manhattan" },
    { name: "Miami", value: "Miami" },
    { name: "San Fran", value: "San Fran" },
    { name: "Santa Monica", value: "Santa Monica" },
    { name: "Seattle", value: "Seattle" },
    { name: "Washington", value: "Washington" },
  ];

  const [warehouse, setWarehouse] = useState("");
  const handleSelectChange = (event) => {
    setWarehouse(event.target.value);
  };

  return (
    <div className="form__selector-field-div">
      <label className="form__selector-field-label" htmlFor="warehouse">
        Warehouse
      </label>
      {warehouse === "" && props.valid === false ? (
          <div className="form__selector-field">
            <select
            required
            className="form__selector-field-dropdown"
            name="warehouse"
            onChange={handleSelectChange}
          >
            <option hidden value="">
              Please select
            </option>
            {warehouseData.map((warehouse, index) => (
              <option key={index} value={warehouse.value}>{warehouse.name}</option>
            ))}
            ;
          </select>
          <div className="form__error-div-dropdown">
            <img className="form__error-icon" src={error} alt="error icon" />
            <p className="form__error-message">This field is required</p>
          </div>
          </div>
      ) : (
        <div className="form__selector-field">
        <select
          className="form__selector-field-dropdown"
          name="warehouse"
          onChange={handleSelectChange}
        >
          <option hidden value="">
            Please select
          </option>
          {warehouseData.map((warehouse, index) => (
            <option key={index} value={warehouse.value}>{warehouse.name}</option>
          ))}
          ;
        </select>
        </div>
      )}
    </div>
  );
};

export default WarehouseSelectField;