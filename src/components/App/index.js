import React, { Component } from "react";
import "./App.css";
import RateQueryParamsFormContainer from "./../../containers/RateQueryParamsForm";
import RateQuotes from "./../../containers/RateQuotes";

class App extends Component {
  render() {
    return (
      <div className="app">
        <RateQueryParamsFormContainer />
        <RateQuotes />
      </div>
    );
  }
}

export default App;
