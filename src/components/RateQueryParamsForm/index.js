import React, { Component } from "react";
import { Field } from "redux-form";
import InputField from "./../InputField/";
import SelectField from "./../SelectField/"
import * as inputFormatters from "./../../utils/inputFormatters";

const RateQueryParamsForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit((queryParams) => props.requestRates())}>
    <Field
      name="loanSize"
      component={InputField}
      type="text"
      placeholder="Loan Size"
      normalize={inputFormatters.currencyStringToInt}
      format={inputFormatters.intToCurrencyString}
    />
    <Field
      name="creditScore"
      component={InputField}
      type="text"
      placeholder="Credit Score"
      normalize={inputFormatters.stringToNumber}
    />
    <Field
      name="propertyType"
      type="select"
      component={SelectField}
    >
      <option value="">-- Property Type -- </option>
      <option value="SingleFamily">Single Family</option>
      <option value="Condo">Condo</option>
      <option value="Townhouse">Townhouse</option>
      <option value="MultiFamily">MultiFamily</option>
    </Field>
    <Field
      name="occupancy"
      component={SelectField}
    >
      <option value="">-- Occupancy -- </option>
      <option value="Primary">Primary</option>
      <option value="Secondary">Secondary</option>
      <option value="Investment">Investment</option>
    </Field>
    <button type="submit" disabled={props.invalid || props.isFetchingRates}>Submit</button>
  </form>
)};

export default RateQueryParamsForm;
