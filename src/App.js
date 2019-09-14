import React, { Component } from 'react';

import './App.css';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      opr: '',
      step: 0, // 0 : first no, 1 : opr , 2 : second no.
      result: 0
    };
  }

  pressButton = (event) => {
    const { name } = event.target;
    const { num1, num2, opr, step } = this.state;

    if (this.isOperator(name)) {
      if (name === 'c') {
        this.setState({ step: 0 })
        this.setState({ result: 0, num1: '', num2: '', opr: '' });
        return;
      }
      if (name === '=' && num1 !== '' && num2 !== '') {
        this.applyOperator();
        this.setState({ step: 0 }) // reset the calculation and readt to get another
        return;
      }

      this.setState({ result: num1.concat(name) });
      this.setState({ opr: name })
      if (step == 0) {
        this.setState({ step: 1 })
        return;
      }
    }

    if (step === 0) {
      this.setState({ num1: num1.concat(name) });
      this.setState({ result: num1.concat(name) });
    }
    else if (step === 1) {
      this.setState({ num2: num2.concat(name) });
      this.setState({ result: num1.concat(opr).concat(num2).concat(name) });
    }
  }

  applyOperator = () => {
    let n1 = parseInt(this.state.num1);
    let n2 = parseInt(this.state.num2);
    let caclulatedResult = 0;
    switch (this.state.opr) {
      case '+':
        caclulatedResult = n1 + n2;

        break;
      case '-':
        caclulatedResult = n1 - n2;
        break;
      case '/':
        caclulatedResult = n1 / n2;
        break;
      case '*':
        caclulatedResult = n1 * n2;
        break;
      case '%':
        caclulatedResult = n1 % n2;
        break;
      default:
    }
    this.setState({ result: caclulatedResult.toString(), num1: caclulatedResult.toString(), num2: '' });

  }

  isOperator = (input) => {
    switch (input) {
      case '=':
      case 'c':
      case '+':
      case '-':
      case '/':
      case '*':
        return true;
        break;
      default:
        return false;
    }
  }

  render() {
    return (
      <div className="App">
        <br />
        <div className="row">
          <input type="text" readOnly="true" value={this.state.result} className="display" />
        </div>
        <div className="row">
          <button className="btn" name="1" onClick={this.pressButton}>1</button>
          <button className="btn" name="2" onClick={this.pressButton}>2</button>
          <button className="btn" name="3" onClick={this.pressButton}>3</button>
        </div>
        <div className="row">
          <button className="btn" name="4" onClick={this.pressButton}>4</button>
          <button className="btn" name="5" onClick={this.pressButton}>5</button>
          <button className="btn" name="6" onClick={this.pressButton}>6</button>
        </div>
        <div className="row">
          <button className="btn" name="7" onClick={this.pressButton}>7</button>
          <button className="btn" name="8" onClick={this.pressButton}>8</button>
          <button className="btn" name="9" onClick={this.pressButton}>9</button>
        </div>
        <div className="row">
          <button className="btn" name="+" onClick={this.pressButton}>+</button>
          <button className="btn" name="0" onClick={this.pressButton}>0</button>
          <button className="btn" name="-" onClick={this.pressButton}>-</button>
        </div>
        <div className="row">
          <button className="btn" name="/" onClick={this.pressButton}>/</button>
          <button className="btn" name="*" onClick={this.pressButton}>*</button>
          <button className="btn" name="%" onClick={this.pressButton}>%</button>
        </div>
        <div className="row">
          <button className="btn" name="=" onClick={this.pressButton}>=</button>
          <button className="btn" name="c" onClick={this.pressButton}>CLS</button>
        </div>

      </div >
    );
  }
}

export default AppComponent;

