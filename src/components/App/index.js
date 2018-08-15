import React, { Component } from 'react';
import './App.css';
import RateQueryParamsFormContainer from "./../../containers/RateQueryParamsForm";

class App extends Component {
  render() {
    return (
      <div className="app">
        <RateQueryParamsFormContainer />
      </div>
    );
  }
}

export default App;
