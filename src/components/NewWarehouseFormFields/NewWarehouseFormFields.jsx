import './NewWarehouseFormFields.scss'

const NewWarehouseFormFields = (props) => {
  return (
    <form className="form">
      <div className="form__field-div">
        <label
          className="form__field-label"
          htmlFor="warehouse-name"
        >
          {props.label}
        </label>
        <input
          className="form__field-input"
          placeholder={props.label}
          type="text"
          name="warehouse-name"
        />
      </div>
    </form>
  );
};

export default NewWarehouseFormFields;
