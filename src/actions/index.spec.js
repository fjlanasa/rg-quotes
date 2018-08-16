import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from './index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  describe('requestRates', () => {
    it('should create REQUEST_RATES action', () => {
      expect(actions.requestRates()).toEqual({
        type: 'REQUEST_RATES',
      })
    })
  })

  describe('receiveRates', () => {
    it('should create RECEIVE_RATES action', () => {
      expect(actions.receiveRates([{name: 'rate1'}])).toEqual({
        rates: [{name: 'rate1'}],
        type: 'RECEIVE_RATES'
      })
    })
  })

  describe('fetchRateQuotes', () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('dispatchs the correct actions on successful fetch request', () => {
      fetchMock.postOnce('https://​ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes', {body: {requestId: '1'}, headers: {'content-type': 'application/json'}})
      fetchMock.getOnce('https://​ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes?requestId=1', {body: {done: true, rateQuotes: [{name: 'rate1'}]}, headers: {'content-type': 'application/json'}})
      const expectedActions = [
        { type: 'REQUEST_RATES' },
        { type: 'RECEIVE_RATES', rates: [{name: 'rate1'}] }
      ]

      const store = mockStore({ rates: [] })

      return (
        store.dispatch(actions.fetchRateQuotes({propertyType: 'Single'}))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
      )
    })

    it('dispatchs the correct actions on failed fetch request', () => {
      fetchMock.postOnce('https://​ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes', {body: {requestId: '1'}, headers: {'content-type': 'application/json'}})
      fetchMock.getOnce('https://​ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/ratequotes?requestId=1', 404)
      const expectedActions = [
        { type: 'REQUEST_RATES' },
        { type: 'RECEIVE_RATES', rates: [] }
      ]

      const store = mockStore({ rates: [] })

      return (
        store.dispatch(actions.fetchRateQuotes({propertyType: 'Single'}))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
      )
    })
  })
})
