import React from "react";

const InputField = ({
  placeholder,
  label,
  input,
  type,
  meta: { pristine, touched, error }
}) => (
  <div className="form-field">
    <label>{label}</label>
    <div className="input-container">
      <input {...input} type={type} placeholder={placeholder} />
      {touched && !pristine && error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default InputField;
