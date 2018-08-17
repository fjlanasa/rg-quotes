This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Available Scripts

To run app, make sure you have NPM or Yarn installed, then:

```
git clone https://github.com/fjlanasa/rg-quotes.git
cd rg-quotes
npm install
REACT_APP_RG_AUTH_KEY=[YOUR AUTH KEY] npm start
Open [http://localhost:3000](http://localhost:3000) to view app in development mode in the browser.
```

Failure to prepend add `REACT_APP_RG_AUTH_KEY=[YOUR AUTH KEY]` will cause API calls to fail due to lack of authorization header.

Run `npm test` or `yarn test` to launch the test runner in the interactive watch mode.

### External Libraries

Besides React and Redux, I used a few external libraries:

- [Redux Form](https://redux-form.com/7.4.2/docs/gettingstarted.md/), which is a library for managing form state in Redux. I started by writing my form and input components (and managing their state) by hand, but found I was basically rewriting many of the main features of the Redux Form API. In particular, the [value lifecycle](https://redux-form.com/7.4.2/docs/valuelifecycle.md/) hooks were helpful in managing the relationship between the values kept in the Redux store and those shown in the input fields. Also, the library made tying input errors to fields convenient.
- Redux Thunk, a pretty standard library for creating async action creators
- [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store), used for testing Redux async action creators
- [enzyme](https://github.com/airbnb/enzyme) a testing utility that makes it easier to make assertions the output of React Components, featuring an API similar to JQuery
- [fetch-mock](https://github.com/wheresrhys/fetch-mock) which provides a nice API for mocking fetch requests and responses
- node-sass-chokidar for CSS preprocessing. Probably could have lived with vanilla CSS, but this is something I general do at the outset of creating a react project.
