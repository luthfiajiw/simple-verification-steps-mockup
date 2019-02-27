import React, { Component } from 'react';
import Select from 'react-select';
import StepNumber from './StepNumber';

const options = [
  {value: 'frontend webdev', label: 'Frontend Web Development'},
  {value: 'backend webdev', label: 'Backend Web Development'},
  {value: 'android dev', label: 'Android Development'},
  {value: 'ios dev', label: 'IOS Development'},
  {value: 'devops', label: 'DevOps'},
  {value: 'data science', label: 'Data Science'},
]

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClearable: true,
      isSearchable: true
    };
  }

  render() {
    const { isClearable, isSearchable } = this.state;
    return (
      <div className="my-4">
        <StepNumber
          num1="num1"
          step1="step1"
          line1="line1"
          num2="num2"
          step2="step2"
          line2="line2"
          num3="num3"
          step3="step3"
        />

        <div className="text-center my-3 py-5 px-3">
          <h3 className="mb-4">What Do You Want To Choose</h3>
          <Select
            options={options}
            isClearable={isClearable}
            isSearchable={isSearchable}
          />
        </div>

        <div className="text-right px-3">
          <button type="submit" className="btn btn-primary">Finish</button>
        </div>

      </div>
    );
  }

}

export default Step1;
