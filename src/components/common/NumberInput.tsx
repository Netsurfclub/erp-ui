import React from "react";

const NumberInput: React.FC<NumberInputProps> = ({
  name,
  value,
  minValue,
  labelText,
  errorMessage = "",
  onChange,
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type="number"
          className="form-control"
          id={name}
          name={name}
          value={value}
          min={minValue}
          onChange={onChange}
        />
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </React.Fragment>
  );
};

export default NumberInput;
