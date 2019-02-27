import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/verification'>
        <div className="App container-fluid">
          <div className="verification-box shadow">
            <Switch>
              <Route exact path="/" component={Step1} />
              <Route exact path="/step2" component={Step2} />
              <Route exact path="/step3" component={Step3} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
