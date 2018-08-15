import React, { Component } from "react";
import { Field } from "redux-form";
import * as inputFormatters from "./../../utils/inputFormatters";

const renderInputField = ({
  placeholder,
  input,
  type,
  meta: { touched, error }
}) => (
  <div>
    <input {...input} type={type} placeholder={placeholder} />
    {touched && error &&
      <span>{error}</span>
    }
  </div>
)

const renderSelectField = ({
  children,
  input,
  label,
  type, meta: { touched, error }
}) => (
  <div>
    <div>
      <select {...input}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const RateQueryParamsForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit((queryParams) => props.requestRates())}>
    <Field
      name="loanSize"
      component={renderInputField}
      type="text"
      placeholder="Loan Size"
      normalize={inputFormatters.currencyStringToInt}
      format={inputFormatters.intToCurrencyString}
    />
    <Field
      name="creditScore"
      component={renderInputField}
      type="text"
      placeholder="Credit Score"
      normalize={inputFormatters.stringToNumber}
    />
    <Field
      name="propertyType"
      type="select"
      component={renderSelectField}
    >
      <option value="">-- Property Type -- </option>
      <option value="SingleFamily">Single Family</option>
      <option value="Condo">Condo</option>
      <option value="Townhouse">Townhouse</option>
      <option value="MultiFamily">MultiFamily</option>
    </Field>
    <Field
      name="occupancy"
      component={renderSelectField}
    >
      <option value="">-- Occupancy -- </option>
      <option value="Primary">Primary</option>
      <option value="Secondary">Secondary</option>
      <option value="Investment">Investment</option>
    </Field>
    <button type="submit" disabled={props.invalid}>Submit</button>
  </form>
)};

export default RateQueryParamsForm;
