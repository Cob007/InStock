import './FormFields.scss'

const FormFields = (props) => {
  return (
    <div className="form">
      <div className="form__field-div">
        <label
          className="form__field-label"
          htmlFor={props.inputName}
        >
          {props.label}
        </label>
        <input
          className="form__field-input"
          placeholder={props.label}
          type="text"
          name={props.inputName}
        />
      </div>
    </div>
  );
};

export default FormFields;
