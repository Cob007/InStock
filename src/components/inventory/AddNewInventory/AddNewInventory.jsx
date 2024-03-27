import "./AddNewInventory.scss";
import React from "react";

const AddNewInventory = () => {
  return (
    <section className="newinventory">
      <h3 className="newinventory__header">Add New Inventory Item</h3>
      <form className="form">
        <div className="form__section-one">
          <h3 className="form__section-header">Item Details </h3>
          <label className="form__label" for="item_name">
            Item Name
          </label>
          <input
            type="text"
            className="form__input"
            id="item_name"
            placeholder="Item Name"
          ></input>
          <label className="form__label" for="item_description">
            Description
          </label>
          <textarea
            type="text"
            className="form__input form__input--wide"
            id="item_description"
            placeholder="Please enter a brief item description..."
          ></textarea>
          <label className="form__label" for="category">
            Category
          </label>
          <select
            className="form__input form__input--selector"
            id="categroy"
            name="category"
          >
            <option>Please select</option>
            <option value="electronics">Electronics</option>
            <option value="apparel">Apparel</option>
            <option value="accessories">Accessories</option>
            <option value="health">Health</option>
            <option value="gear">Gear</option>
          </select>
        </div>
        <div className="form__section-two">
          <h3 className="form__section-header">Item Availability</h3>
          {/* <label className="form__label" for="stockstatus">
            Status
          </label>
          <div className="form__stock-status">
             <div className="form__radio-selection">
              <input
                type="radio"
                className="form__radio"
                id="in_stock"
                name="stockstatus"
                value="In Stock"
              ></input>
              <label className="form__radio-label" for="in_stock">
                In stock
              </label>
            </div>
        <div className="form__radio-selection">
              <input
                type="radio"
                className="form__radio"
                id="out_of_stock"
                name="stockstatus"
                value="Out of Stock"
              ></input>
              <label className="form__radio-label" for="in_stock">
                Out of stock
              </label>
            </div>
          </div> */}
          <label className="form__label">Quantity</label>
          <input type="number" className="form__input" placeholder="0"></input>
          <label className="form__label">Warehouse</label>
          <select
            className="form__input form__input--selector"
            id="warehouse"
            name="warehouse"
          >
            <option>Please select</option>
            <option value="manhattan">Manhattan</option>
            <option value="washington">Washington</option>
            <option value="jersey">Jersey</option>
            <option value="san_fran">San Fran</option>
            <option value="santa_monica">Santa Monica</option>
            <option value="seattle">Seattle</option>
            <option value="miami">Miami</option>
          </select>
        </div>
        <div className="form__buttons">
          <button className="form__button">Cancel</button>
          <button className="form__button form__button--submit">
            +Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNewInventory;
