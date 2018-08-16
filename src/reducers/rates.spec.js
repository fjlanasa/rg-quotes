import rates from "./rates";

describe("rates reducer", () => {
  it("should handle initial state", () => {
    expect(
      rates(undefined, {})
    ).toEqual([])
  })

  it("should handle REQUEST_RATES", () => {
    expect(
      rates(
        [],
        { type: "REQUEST_RATES" }
      )
    ).toEqual([])
  })

  it("should handle RECEIVE_RATES", () => {
    expect(
      rates(
        [],
        {
          type: "RECEIVE_RATES",
          rates: [{name: "rate1"}]
        }
      )
    ).toEqual([{name: "rate1"}])
  })
})
