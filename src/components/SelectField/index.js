import React from "react";

const SelectField = ({
  children,
  input,
  label,
  type,
  meta: { pristine, touched, error }
}) => {
  let selectClassName = "",
    shouldDisplayError = touched && !pristine && error;
  if (shouldDisplayError) selectClassName += "error-field ";
  if (input.value) selectClassName += "active";
  return (
    <div className="form-field">
      <div className="input-container">
        <label>{label}</label>
        <select className={selectClassName} {...input}>
          {children}
        </select>
      </div>
      {shouldDisplayError && <div className="error">{error}</div>}
    </div>
  );
};

export default SelectField;
