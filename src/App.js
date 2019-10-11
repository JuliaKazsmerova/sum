import React, { Component } from 'react';
import './App.css';
import CalculatorForm from "./CalculatorForm";
import Result from "./Result";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result: null};
    this.propagateResult = result => this.setState({result});
  }

  render() {
    return (
      <div className="App">
        <h1>Sum of numbers</h1>
        <CalculatorForm onResultChange={this.propagateResult}/>
        <Result value={this.state.result} />
      </div>
    );
  }
}

