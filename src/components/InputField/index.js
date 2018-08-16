import React from "react";

const InputField = ({
  placeholder,
  label,
  input,
  type,
  meta: { pristine, touched, error }
}) => {
  let shouldDisplayError = touched && !pristine && error;
  return (
    <div className="form-field">
      <div className="input-container">
        <label>{label}</label>
        <input
          className={shouldDisplayError ? "error-field" : ""}
          {...input}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {shouldDisplayError && <div className="error">{error}</div>}
    </div>
  );
};

export default InputField;
