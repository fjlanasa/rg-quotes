import isFetchingRates from "./isFetchingRates";

describe("isFetchingRates reducer", () => {
  it("should handle initial state", () => {
    expect(
      isFetchingRates(undefined, {})
    ).toEqual(false)
  })

  it("should handle REQUEST_RATES", () => {
    expect(
      isFetchingRates(
        false,
        { type: "REQUEST_RATES" }
      )
    ).toEqual(true)
  })
})
