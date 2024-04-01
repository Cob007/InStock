import "./NewInventory.scss";
import FormFields from "../../components/FormFields/FormFields";
import WarehouseSelectField from "../../components/FormFields/SelectField/WarehouseSelectField";
import ItemCategoryeSelectField from "../../components/FormFields/SelectField/ItemCategorySelectField";
import { useState, useEffect, useRef } from "react";
import NumberField from "../../components/FormFields/NumberField/NumberField";
import TextareaField from "../../components/FormFields/TextareaField/TextareaField";
import RadioButton from "../../components/FormFields/RadioButton/RadioButton";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const NewInventory = () => {
  const [valid, setValid] = useState(true);

  //radio button start
  const [inStock, setInStock] = useState(false);
  const handleInStock = () => {
    setInStock(true);
  };
  const handleOutOfStock = () => {
    setInStock(false);
  };
  //radio button end

  const onSubmit = (event) => {
    event.preventDefault();
    setValid(false);

    const item_name = event.target.itemName.value;
    const item_description = event.target.itemDescription.value;
    const item_category = event.target.itemCategory.value;
    const item_status = event.target.inStock.value;
    const item_quantity = event.target.quantity.value;
    const warehouse_name = event.target.warehouse.value;

    console.log(item_name);
    console.log(item_description);
    console.log(item_category);
    console.log(item_status);
    console.log(item_quantity);
    console.log(warehouse_name);
  };

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
        <h3 className="new-inventory__header">Add New Inventory Item</h3>
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
                    name="inStock"
                    dataName="In Stock"
                    value="inStock"
                    checked={inStock}
                    onChange={handleInStock}
                  />
                </div>
                <div className="inventory-form__radio-group">
                  <RadioButton
                    label="Out of stock"
                    name="inStock"
                    dataName="Out of Stock"
                    value="outOfStock"
                    checked={inStock}
                    onChange={handleOutOfStock}
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

export default NewInventory;
