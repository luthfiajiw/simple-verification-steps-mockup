import React, { Component } from 'react';
import StepNumber from './StepNumber';
import { NavLink } from 'react-router-dom';

class Step1 extends Component {

  render() {
    return (
      <div className="mt-4">
        <StepNumber
          num1="num1"
          step1="step1"
        />
      <form className="mt-5 mb-3">
        <p className="text-center mb-5">Type The Verification Code Here</p>
        <div className="code-verification text-center">
          <div className="inputBox">
            <input className="code" type="number" />
          </div>
        </div>

        <div className="text-right">
          <NavLink to='/step2'>
            <button type="submit" className="btn btn-primary mt-5">Next</button>
          </NavLink>
        </div>

      </form>
      </div>
    );
  }

}

export default Step1;
