import React, { Component } from "react";
import { Field } from "redux-form";
import InputField from "./../InputField/";
import SelectField from "./../SelectField/";
import * as formatters from "./../../utils/formatters";
import "./styles.css";

const RateQueryParamsForm = props => {
  return (
    <form onSubmit={props.handleSubmit(props.fetchRateQuotes)}>
      <div className="form-field-container">
        <div className="form-field-group">
          <Field
            name="loanSize"
            label="Loan Size"
            component={InputField}
            type="text"
            normalize={formatters.currencyStringToInt}
            format={formatters.intToCurrencyString}
          />
          <Field
            name="creditScore"
            label="Credit Score"
            component={InputField}
            type="text"
            normalize={formatters.stringToNumber}
          />
        </div>
        <div className="form-field-group">
          <Field
            name="propertyType"
            type="select"
            label="Property Type"
            component={SelectField}
          >
            <option disabled={true} value="">
              -- Please Select --{" "}
            </option>
            <option value="SingleFamily">Single Family</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="MultiFamily">MultiFamily</option>
          </Field>
          <Field
            name="occupancy"
            type="select"
            label="Occupancy"
            component={SelectField}
          >
            <option disabled={true} value="">
              -- Please Select --{" "}
            </option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Investment">Investment</option>
          </Field>
        </div>
      </div>
      <div className="button-container">
        <button type="submit" disabled={props.invalid || props.isFetchingRates}>
          Quote Rates
        </button>
      </div>
    </form>
  );
};

export default RateQueryParamsForm;
