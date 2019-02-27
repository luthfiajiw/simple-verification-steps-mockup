import React from 'react';

function StepNumber(props) {
  return(
    <div className="d-flex justify-content-around">
      <div className="text-center">
        <p id={props.num1} className="number">1</p>
        <p id={props.step1} className="step">Confirm Your Account</p>
      </div>
      <div id={props.line1} className="line"></div>
        <div className="text-center">
          <p id={props.num2} className="number">2</p>
          <p id={props.step2} className="step">Fill in Your Biodata</p>
        </div>
      <div id={props.line2} className="line"></div>
        <div className="text-center">
          <p id={props.num3} className="number">3</p>
          <p id={props.step3} className="step">Choose an Option</p>
        </div>
    </div>
  )
}

export default StepNumber;
