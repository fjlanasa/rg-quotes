import React from "react";
import { shallow } from "enzyme";
import RateListings from "./";
import RateQuoteRow from "./../RateQuoteRow/";

describe("RateListings", () => {
  let rates = [
    { loanType: "loan1", apr: 2.323 },
    { loanType: "loan2", apr: 3.232 }
  ];
  let subject = shallow(<RateListings rates={rates} />);

  it("renders a table", () => {
    expect(subject.name()).toBe("table");
  });

  it("renders th elements for each key", () => {
    expect(subject.find("th").length).toEqual(2);
  });

  it("renders th elements for each key", () => {
    expect(subject.find("th").length).toEqual(2);
  });

  it("renders RateQuoteRow elements with appropriate prop for each rate", () => {
    expect(subject.find(RateQuoteRow).length).toEqual(2);
    expect(subject.contains(<RateQuoteRow rate={rates[0]} />)).toEqual(true);
    expect(subject.contains(<RateQuoteRow rate={rates[1]} />)).toEqual(true);
  });
});
