import "./NewWarehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import FormFields from "../../components/FormFields/FormFields";
import { Link } from "react-router-dom";

const NewWarehouse = () => {

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.warehouseName.value)
  }

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
      <form onSubmit={onSubmit}>
        <section className="new-warehouse__warehouse-div">
          <h2 className="new-warehouse__warehouse-header">Warehouse Details</h2>
          <FormFields label="Warehouse Name" inputName="warehouseName" />
          <FormFields label="Street Address" inputName="street-address" />
          <FormFields label="City" inputName="city" />
          <FormFields label="Country" inputName="country" />
        </section>
        <div className="new-warehouse__divider"></div>
        <section className="new-warehouse__contact-div">
          <h2 className="new-warehouse__contact-header">Contact Details</h2>
          <FormFields label="Contact Name" inputName="contact-name" />
          <FormFields label="Position" inputName="position" />
          <FormFields label="Phone Number" inputName="phone-number" />
          <FormFields label="Email" inputName="email" />
        </section>
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
