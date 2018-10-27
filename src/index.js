// Libraries
import React, { Component } from "react";
import ReactDOM from "react-dom";
// Containers
import MagicCards from "./containers/magic_container";

class App extends Component {
  render() {
    return <MagicCards />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
