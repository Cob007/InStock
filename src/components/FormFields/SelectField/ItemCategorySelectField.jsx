import "../SelectField/SelectField.scss";
import { useState } from "react";
import error from "../../../assets/Icons/error-24px.svg";

const ItemCategorySelectField = (props) => {
  const itemCategoryData = [
    { name: "Accessories", value: "Accessories" },
    { name: "Apparel", value: "Apparel" },
    { name: "Electronics", value: "Electronics" },
    { name: "Gear", value: "Gear" },
    { name: "Health", value: "Health" },
  ];

  const [itemCategory, setitemCategory] = useState("");
  const handleSelectChange = (event) => {
    setitemCategory(event.target.value);
  };

  return (
    <div className="form__selector-field-div">
      <label className="form__selector-field-label" htmlFor="itemCategory">
        Category
      </label>
      {itemCategory === "" && props.valid === false ? (
        <div className="form__selector-field">
          <select
            required
            value={props.value}
            className="form__selector-field-dropdown"
            name="itemCategory"
            onChange={handleSelectChange}
          >
            <option hidden value="">
              Please select
            </option>
            {itemCategoryData.map((category, index) => (
              <option key={index} value={category.value}>
                {category.name}
              </option>
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
          value={props.value}
            key={itemCategoryData.value}
            className="form__selector-field-dropdown"
            name="itemCategory"
            onChange={handleSelectChange}
          >
            <option hidden value="">
              Please select
            </option>
            {itemCategoryData.map((category, index) => (
              <option key={index} value={category.value}>
                {category.name}
              </option>
            ))}
            ;
          </select>
        </div>
      )}
    </div>
  );
};

export default ItemCategorySelectField;
