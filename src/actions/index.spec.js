import * as actions from './index'

describe('actions', () => {
  it('requestRates should create REQUEST_RATES action', () => {
    expect(actions.requestRates()).toEqual({
      type: 'REQUEST_RATES',
    })
  })
})
