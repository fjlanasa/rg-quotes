import React from "react";
import { shallow } from "enzyme";
import RateQueryParamsForm from "./";

describe("ContactFormComponent", () => {
  let subject = null;
  let invalid, isFetchingRates, fetchRateQuotes, handleSubmit;
  beforeEach(() => {
    (invalid = false), (isFetchingRates = false), (handleSubmit = fn => fn);
  });
  const buildSubject = () => {
    fetchRateQuotes = jest.fn();
    const props = {
      fetchRateQuotes,
      isFetchingRates,
      handleSubmit,
      invalid
    };
    return shallow(<RateQueryParamsForm {...props} />);
  };

  it("disables submit button if form is invalid", () => {
    invalid = true;
    subject = buildSubject();
    expect(subject.find("[type='submit']").prop("disabled")).toEqual(true);
  });

  it("disables submit button if form is isFetchingRates", () => {
    isFetchingRates = true;
    subject = buildSubject();
    expect(subject.find("[type='submit']").is("[disabled]"));
  });

  it("calls fetchRateQuotes on submit", () => {
    subject = buildSubject();
    subject.find("form").simulate("submit");
    expect(fetchRateQuotes).toBeCalled();
  });
});
