import React from "react";

const SelectField = ({
  children,
  input,
  label,
  type,
  meta: { pristine, touched, error }
}) => (
  <div className="form-field">
    <label>{label}</label>
    <div className="input-container">
      <select className={input.value ? "active" : ""} {...input}>
        {children}
      </select>
      {touched && !pristine && error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default SelectField;
