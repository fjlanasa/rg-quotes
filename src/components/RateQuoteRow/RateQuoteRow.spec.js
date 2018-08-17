import React from "react";
import { shallow } from "enzyme";
import RateQuoteRow from "./";
import RateQuoteCell from "./../RateQuoteCell/";

describe("RateQuoteRow", () => {
  let rate = { loanType: "SingleFamily", apr: 2.323 },
    subject = shallow(<RateQuoteRow rate={rate} />);

  it("renders a tr", () => {
    expect(subject.name()).toEqual("tr");
  });

  it("has class row", () => {
    expect(subject.hasClass("row")).toEqual(true);
  });

  it("renders RateQuoteCell for every key in object", () => {
    expect(subject.children().length).toEqual(2);
    expect(
      subject
        .children()
        .contains(<RateQuoteCell label={"loanType"} value="SingleFamily" />)
    ).toEqual(true);
    expect(
      subject.children().contains(<RateQuoteCell label={"apr"} value={2.323} />)
    ).toEqual(true);
  });
});
