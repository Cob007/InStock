import FormFields from "../../components/FormFields/FormFields";
import WarehouseSelectField from "../../components/FormFields/SelectField/WarehouseSelectField";
import ItemCategoryeSelectField from "../../components/FormFields/SelectField/ItemCategorySelectField";
import { useState, useEffect, useRef } from "react";
import NumberField from "../../components/FormFields/NumberField/NumberField";
import TextareaField from "../../components/FormFields/TextareaField/TextareaField";
import RadioButton from "../../components/FormFields/RadioButton/RadioButton";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditInventory = () => {
  const navigate = useNavigate();

  let itemId = useParams();
  let inventoryId = itemId.itemID;

  const [valid, setValid] = useState(true);
  const [inventoryData, setInventoryData] = useState(null);

  const [stockStatus, setStockStatus] = useState("In Stock");
  const radioInStockChange = () => {
    setStockStatus("In Stock");
  };
  const radioOutOfStockChange = () => {
    setStockStatus("Out of Stock");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValid(false);

    try {
      await axios.put(`http://localhost:8080/inventories/${inventoryId}`, {
        warehouse_id: event.target.warehouse.value,
        item_name: event.target.itemName.value,
        description: event.target.itemDescription.value,
        category: event.target.itemCategory.value,
        status: event.target.stockStatus.value,
        quantity: event.target.quantity.value,
      });
      console.log(onSubmit)
      alert("Edit Successful");
      navigate("/inventory");
    } catch (error) {
      console.log(error);
    }
  };

  const getInventoryData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/inventories/${inventoryId}`
      );
      setInventoryData(response.data);
      setStockStatus(response.data.status)
      console.log(response.data.status)
      console.log(stockStatus)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInventoryData();
  }, []);

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
      {inventoryData === null ? (
        <p>Loading...</p>
      ) : (
      <form className="inventory-form" noValidate onSubmit={onSubmit}>
        <div className="inventory-form__top-section">
          <div className="inventory-form__section-one">
            <h2 className="inventory-form__section-header">Item Details </h2>
            <FormFields
              value={inventoryData.item_name}
              setValue={setInventoryData}
              label="Item Name"
              inputName="itemName"
              valid={valid}
            />
            <TextareaField
              value={inventoryData.description}
              setValue={setInventoryData}
              label="Description"
              inputName="itemDescription"
              valid={valid}
            />
            <ItemCategoryeSelectField
              value={inventoryData.category}
              setValue={setInventoryData}
              inputName="itemCategory"
              valid={valid}
            />
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
                    value={stockStatus === inventoryData.status}
                    check={stockStatus === "In Stock" ? true : false}
                    onChange={radioInStockChange}
                    setValue={setInventoryData}
                  />
                </div>
                <div className="inventory-form__radio-group">
                  <RadioButton
                    label="Out of stock"
                    name="stockStatus"
                    dataName="Out of Stock"
                    value={stockStatus === inventoryData.status}
                    check={stockStatus === "Out of Stock" ? true : false}
                    onChange={radioOutOfStockChange}
                    setValue={setInventoryData}
                  />
                </div>
              </div>
            </div>
            { stockStatus === "In Stock" ? 
            <div className="inventory-form__quantity">
              <NumberField
              value={inventoryData.quantity}
              setValue={setInventoryData}
                label="Quantity"
                inputName="quantity"
                valid={valid}
              />
            </div> : <div className="inventory-form__quantity--hidden">
              <NumberField
                id="quantityField"
                label="Quantity"
                inputName="quantity"
                valid={valid}
                value="0" /> 
                </div> }
            <WarehouseSelectField value={inventoryData.warehouse_id}
              setValue={setInventoryData}inputName="warehouse" valid={valid} />
          </div>
        </div>
        <div className="inventory-form__bottom-section">
          <div className="inventory-form__buttons">
          <Link to="/inventory" className="inventory-form__link">Cancel</Link>
            <button className="inventory-form__button inventory-form__button--submit">
              Save
            </button>
          </div>
        </div>
      </form> )}
    </main>
  );
};

export default EditInventory;
