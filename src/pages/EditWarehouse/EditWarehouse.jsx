import "./EditWarehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import FormFields from "../../components/FormFields/FormFields";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditWarehouse = () => {

  const navigate = useNavigate()

  let warehouseId = useParams();
  let getId = warehouseId.warehouseID;

  const [valid, setValid] = useState(true);
  const [warehouseData, setWarehouseData] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setValid(false);

    if (
      event.target.warehouseName.value === "" ||
      event.target.streetAddress.value === "" ||
      event.target.city.value === "" ||
      event.target.country.value === "" ||
      event.target.contactName.value === "" ||
      event.target.position.value === "" ||
      event.target.phoneNumber.value === "" ||
      event.target.email.value === ""
    ) {
      console.log("Error");
    } else {
      const warehouse_name = event.target.warehouseName.value;
      const address = event.target.streetAddress.value;
      const city = event.target.city.value;
      const country = event.target.country.value;
      const contact_name = event.target.contactName.value;
      const contact_position = event.target.position.value;
      const contact_phone = event.target.phoneNumber.value;
      const contact_email = event.target.email.value;

      try {
        await axios.patch(`http://localhost:8080/warehouses/${getId}`, {
          warehouse_name: warehouse_name,
          address: address,
          city: city,
          country: country,
          contact_name: contact_name,
          contact_position: contact_position,
          contact_phone: contact_phone,
          contact_email: contact_email,
        });
        alert("Edit Successful");
        navigate("/warehouse");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getWarehouse = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/warehouses/${getId}`
      );
      setWarehouseData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWarehouse();
  }, []);

  return (
    <main className="edit-warehouse">
      <section className="edit-warehouse__header-div">
        <img
          className="edit-warehouse__back-arrow"
          src={ArrowBack}
          alt="Arrow Back"
        />
        <h1 className="edit-warehouse__header">Edit Warehouse</h1>
      </section>
      <div className="edit-warehouse__divider"></div>
      {warehouseData === null ? (
        <p>Loading...</p>
      ) : (
        <form className="edit-warehouse__form" noValidate onSubmit={onSubmit}>
          <div className="edit-warehouse__fields-div">
            <section className="edit-warehouse__warehouse-div">
              <h2 className="edit-warehouse__warehouse-header">
                Warehouse Details
              </h2>
              <FormFields
                value={warehouseData.warehouse_name}
                setValue={setWarehouseData}
                label="Warehouse Name"
                inputName="warehouseName"
                valid={valid}
              />
              <FormFields
                value={warehouseData.address}
                setValue={setWarehouseData}
                label="Street Address"
                inputName="streetAddress"
                valid={valid}
              />
              <FormFields
                value={warehouseData.city}
                setValue={setWarehouseData}
                label="City"
                inputName="city"
                valid={valid}
              />
              <FormFields
                value={warehouseData.country}
                setValue={setWarehouseData}
                label="Country"
                inputName="country"
                valid={valid}
              />
            </section>
            <div className="edit-warehouse__divider-responsive"></div>
            <section className="edit-warehouse__contact-div">
              <h2 className="edit-warehouse__contact-header">
                Contact Details
              </h2>
              <FormFields
                value={warehouseData.contact_name}
                setValue={setWarehouseData}
                label="Contact Name"
                inputName="contactName"
                valid={valid}
              />
              <FormFields
                value={warehouseData.contact_position}
                setValue={setWarehouseData}
                label="Position"
                inputName="position"
                valid={valid}
              />
              <FormFields
                value={warehouseData.contact_phone}
                setValue={setWarehouseData}
                label="Phone Number"
                inputName="phoneNumber"
                valid={valid}
              />
              <FormFields
                value={warehouseData.contact_email}
                setValue={setWarehouseData}
                label="Email"
                inputName="email"
                valid={valid}
              />
            </section>
          </div>
          <section className="edit-warehouse__buttons-div">
            <Link to="/warehouse" className="edit-warehouse__cancel">
              Cancel
            </Link>
            <button className="edit-warehouse__add">Save</button>
          </section>
        </form>
      )}
    </main>
  );
};

export default EditWarehouse;
