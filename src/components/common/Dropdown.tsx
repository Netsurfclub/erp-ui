import React from "react";

import ErrorMessage from "./ErrorMessage";

const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  labelText,
  data,
  errorMessage,
  onChange,
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label>{labelText}</label>
        <select
          className="form-control"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value={0}>{""}</option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </React.Fragment>
  );
};

export default Dropdown;
