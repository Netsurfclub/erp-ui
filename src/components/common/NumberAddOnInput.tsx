import React from "react";

const NumberAddOnInput: React.FC<NumberAddOnInputProps> = ({
  name,
  value,
  minValue,
  addOnText,
  errorMessage = "",
  onChange,
}) => {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          id={name}
          name={name}
          value={value}
          min={minValue}
          onChange={onChange}
        />
        <span className="input-group-text">{addOnText}</span>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
    </React.Fragment>
  );
};

export default NumberAddOnInput;
