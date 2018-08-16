import React from "react";

const InputField = ({
  placeholder,
  input,
  type,
  meta: { pristine, touched, error }
}) => (
  <div>
    <input {...input} type={type} placeholder={placeholder} />
    {touched && !pristine && error && <span className="error">{error}</span>}
  </div>
);

export default InputField;
