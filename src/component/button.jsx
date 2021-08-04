import React, { Component } from "react";
import * as math from "mathjs";

export default class Button extends Component {
  state = {
    display: " ",
  };
  handleButton = (e) => {
    e.preventDefault();
    this.setState({
      display: this.state.display + e.currentTarget.textContent,
    });
  };

  handleCalculation = () => {
   this.setState({ display: math.evaluate(this.state.display) });
  };
  handleDelete = () => {
    this.setState({ display: "" });
  };
  render() {
    return (
      <div class="container">
        <div className='screen'>
          <h1>{this.state.display}</h1>
        </div>
        <div className="keypads">
          <button onClick={this.handleButton}>1</button>
          <button onClick={this.handleButton}>2</button>
          <button onClick={this.handleButton}>3</button>
          <button onClick={this.handleButton}>4</button>
          <button onClick={this.handleButton}>5</button>
          <button onClick={this.handleButton}>6</button>
          <button onClick={this.handleButton}>7</button>
          <button onClick={this.handleButton}>8</button>
          <button onClick={this.handleButton}>9</button>
          <button onClick={this.handleButton}>+</button>
          <button onClick={this.handleButton}>-</button>
          <button onClick={this.handleButton}>*</button>
          <button onClick={this.handleButton}>/</button>
          <button onClick={this.handleButton}>.</button>
          <button onClick={this.handleCalculation}>=</button>
          <button onClick={this.handleDelete}>clear</button>

          
        </div>
      </div>
    );
  }
}
