import FormFields from "../../components/FormFields/FormFields";
import WarehouseSelectField from "../../components/FormFields/SelectField/WarehouseSelectField";
import ItemCategoryeSelectField from "../../components/FormFields/SelectField/ItemCategorySelectField";
import { useState, useEffect, useRef } from "react";
import NumberField from "../../components/FormFields/NumberField/NumberField";
import TextareaField from "../../components/FormFields/TextareaField/TextareaField";
import RadioButton from "../../components/FormFields/RadioButton/RadioButton";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const EditInventory = () => {

    const [valid, setValid] = useState(true);
    const [stockStatus, setStockStatus] = useState("inStock");
    const radioInStockChange = () => {
      setStockStatus("inStock");
    };
    const radioOutOfStockChange = () => {
      setStockStatus("outOfStock");
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValid(false);
    }
  return (
    <main className="new-inventory">
      <section className="new-inventory__header-div">
        <Link to="/inventory">
          <img
            className="new-inventory__back-arrow"
            src={ArrowBack}
            alt="Arrow Back"
          />
        </Link>
        <h3 className="new-inventory__header">Edit Inventory Item</h3>
      </section>
      <form className="inventory-form" noValidate onSubmit={onSubmit}>
        <div className="inventory-form__top-section">
          <div className="inventory-form__section-one">
            <h2 className="inventory-form__section-header">Item Details </h2>
            <FormFields label="Item Name" inputName="itemName" valid={valid} />
            <TextareaField
              label="Description"
              inputName="itemDescription"
              valid={valid}
            />
            <ItemCategoryeSelectField inputName="itemCategory" valid={valid} />
          </div>
          <div className="inventory-form__section-two">
            <h3 className="inventory-form__section-header">
              Item Availability
            </h3>
            <div className="inventory-form__radio-buttons">
              <p className="inventory-form__radio-header">Status</p>
              <div className="inventory-form__radio-selections">
                <div className="inventory-form__radio-group">
                  <RadioButton
                    label="In stock"
                    name="stockStatus"
                    dataName="In Stock"
                    value={stockStatus === "inStock"}
                    onChange={radioInStockChange}
                  />
                </div>
                <div className="inventory-form__radio-group">
                  <RadioButton
                    label="Out of stock"
                    name="stockStatus"
                    dataName="Out of Stock"
                    value={stockStatus === "outOfStock"}
                    onChange={radioOutOfStockChange}
                  />
                </div>
              </div>
            </div>
            <div className="inventory-form__quantity">
              <NumberField
                label="Quantity"
                inputName="quantity"
                valid={valid}
              />
            </div>
            <WarehouseSelectField inputName="warehouse" valid={valid} />
          </div>
        </div>
        <div className="inventory-form__bottom-section">
          <div className="inventory-form__buttons">
            <button className="inventory-form__button">Cancel</button>
            <button className="inventory-form__button inventory-form__button--submit">
              + Add Item
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default EditInventory;
