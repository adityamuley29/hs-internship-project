import "./App.css";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";

import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CardContainer />
      </div>
    );
  }
}

export default App;
