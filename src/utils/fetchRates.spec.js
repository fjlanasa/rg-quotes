import fetchMock from 'fetch-mock'
import * as fetchRates from './fetchRates';

describe('api utils', () => {
  describe('handleGetRateRequestResponse', () => {
    const requestId = "1"
    it('returns rates if request is done', () => {
      return fetchRates.handleGetRateRequestResponse({ done: true, rateQuotes: [{ name: 'rate1' }] }, requestId).then((data) => {
        expect(data).toEqual([{ name: 'rate1' }])
      })
    })
  })
})
