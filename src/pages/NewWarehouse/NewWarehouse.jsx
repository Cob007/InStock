import "./NewWarehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import NewWarehouseFormFields from "../../components/NewWarehouseFormFields/NewWarehouseFormFields";

const NewWarehouse = () => {
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
      <section className="new-warehouse__warehouse-div">
        <h2 className="new-warehouse__warehouse-header">Warehouse Details</h2>
        <NewWarehouseFormFields label="Warehouse Name" />
        <NewWarehouseFormFields label="Street Address" />
        <NewWarehouseFormFields label="City" />
        <NewWarehouseFormFields label="Country" />
      </section>
      <div className="new-warehouse__divider"></div>
      <section className="new-warehouse__contact-div">
        <h2 className="new-warehouse__contact-header">Contact Details</h2>
      </section>
    </main>
  );
};

export default NewWarehouse;
