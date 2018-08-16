import React from "react";

const SelectField = ({
  children,
  input,
  label,
  type,
  meta: { pristine, touched, error }
}) => (
  <div>
    <div>
      <select {...input}>{children}</select>
      {touched && !pristine && error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default SelectField;
