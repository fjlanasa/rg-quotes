import React from "react";
import { shallow } from "enzyme";
import RateQuotes from "./";
import RateListings from "./../RateListings/";
import LoadingIndicator from "./../LoadingIndicator/";
import NoRatesIndicator from "./../NoRatesIndicator";

describe("RateQuotes", () => {
  let rates, isFetchingRates;

  beforeEach(() => {
    (rates = [{ name: "rate1" }]), (isFetchingRates = false);
  });
  const buildSubject = () => {
    let props = {
      rates,
      isFetchingRates
    };
    return shallow(<RateQuotes {...props} />);
  };

  it("renders null if rates are null and isFetchingRates is false", () => {
    rates = null;
    let subject = buildSubject();
    expect(subject.contains(<RateListings rates={rates} />)).toEqual(false);
    expect(subject.contains(<LoadingIndicator />)).toEqual(false);
    expect(subject.contains(<NoRatesIndicator />)).toEqual(false);
  });

  it("renders LoadingIndicator if isFetchingRates", () => {
    isFetchingRates = true;
    let subject = buildSubject();
    expect(subject.contains(<LoadingIndicator />)).toEqual(true);
  });

  it("renders RateListings if isFetchingRates is false and rates are not null or empty", () => {
    let subject = buildSubject();
    expect(subject.contains(<RateListings rates={rates} />)).toEqual(true);
  });

  it("renders NoRatesIndicator if isFetchingRates is false and rates are empty", () => {
    rates = [];
    let subject = buildSubject();
    expect(subject.contains(<NoRatesIndicator />)).toEqual(true);
  });
});
