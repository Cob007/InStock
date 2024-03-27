import "./NewWarehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import FormFields from "../../components/FormFields/FormFields";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NewWarehouse = () => {
  const [valid, setValid] = useState(true);

  const onSubmit = (event) => {
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
      return;
    } else {
      console.log("Cool!");
    }
  };

  return (
    <main className="new-warehouse">
      <section className="new-warehouse__header-div">
        <img
          className="new-warehouse__back-arrow"
          src={ArrowBack}
          alt="Arrow Back"
        />
        <h1 className="new-warehouse__header">Add New Warehouse</h1>
      </section>
      <div className="new-warehouse__divider"></div>
      <form className="new-warehouse__form" noValidate onSubmit={onSubmit}>
        <div className="new-warehouse__fields-div">
          <section className="new-warehouse__warehouse-div">
            <h2 className="new-warehouse__warehouse-header">
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
          <div className="new-warehouse__divider-responsive"></div>
          <section className="new-warehouse__contact-div">
            <h2 className="new-warehouse__contact-header">Contact Details</h2>
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
        <section className="new-warehouse__buttons-div">
          <Link to="/warehouse" className="new-warehouse__cancel">
            Cancel
          </Link>
          <button className="new-warehouse__add">+ Add Warehouse</button>
        </section>
      </form>
    </main>
  );
};

export default NewWarehouse;
