import "./EditWarehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import FormFields from "../../components/FormFields/FormFields";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const EditWarehouse = () => {
  const [valid, setValid] = useState(true);

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setValid(false);

  //   if (
  //     event.target.warehouseName.value === "" ||
  //     event.target.streetAddress.value === "" ||
  //     event.target.city.value === "" ||
  //     event.target.country.value === "" ||
  //     event.target.contactName.value === "" ||
  //     event.target.position.value === "" ||
  //     event.target.phoneNumber.value === "" ||
  //     event.target.email.value === ""
  //   ) {
  //     console.log("Error")
  //   } else {
  //     console.log("Cool!");

  //     const warehouse_name = event.target.warehouseName.value
  //     const address = event.target.streetAddress.value
  //     const city = event.target.city.value
  //     const country = event.target.country.value
  //     const contact_name = event.target.contactName.value 
  //     const contact_position = event.target.position.value 
  //     const contact_phone = event.target.phoneNumber.value 
  //     const contact_email = event.target.email.value 

  //     try {
  //       await axios.post("http://localhost:8080/warehouses", {
  //         warehouse_name: warehouse_name,
  //         address: address,
  //         city: city,
  //         country: country,
  //         contact_name: contact_name,
  //         contact_position: contact_position,
  //         contact_phone: contact_phone,
  //         contact_email: contact_email
  //       });
  //       alert("Upload Successful");
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <main className="edit-warehouse">
      <section className="edit-warehouse__header-div">
        <img
          className="edit-warehouse__back-arrow"
          src={ArrowBack}
          alt="Arrow Back"
        />
        <h1 className="edit-warehouse__header">Add New Warehouse</h1>
      </section>
      <div className="edit-warehouse__divider"></div>
      <form className="edit-warehouse__form" noValidate>
        <div className="edit-warehouse__fields-div">
          <section className="edit-warehouse__warehouse-div">
            <h2 className="edit-warehouse__warehouse-header">
              Warehouse Details
            </h2>
            <FormFields
              label="Warehouse Name"
              inputName="warehouseName"
              valid={valid}
            />
            <FormFields
              label="Street Address"
              inputName="streetAddress"
              valid={valid}
            />
            <FormFields label="City" inputName="city" valid={valid} />
            <FormFields label="Country" inputName="country" valid={valid} />
          </section>
          <div className="edit-warehouse__divider-responsive"></div>
          <section className="edit-warehouse__contact-div">
            <h2 className="edit-warehouse__contact-header">Contact Details</h2>
            <FormFields
              label="Contact Name"
              inputName="contactName"
              valid={valid}
            />
            <FormFields label="Position" inputName="position" valid={valid} />
            <FormFields
              label="Phone Number"
              inputName="phoneNumber"
              valid={valid}
            />
            <FormFields label="Email" inputName="email" valid={valid} />
          </section>
        </div>
        <section className="edit-warehouse__buttons-div">
          <Link to="/warehouse" className="edit-warehouse__cancel">
            Cancel
          </Link>
          <button className="edit-warehouse__add">+ Add Warehouse</button>
        </section>
      </form>
    </main>
  );
};

export default EditWarehouse;
