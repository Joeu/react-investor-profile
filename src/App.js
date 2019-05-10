import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormProvider from './FormProvider';
import InitialInformation from './views/presentational/InitialInformation';
import FormInvestor from './views/presentational/FormInvestor';
import Success from './views/presentational/Success';

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={InitialInformation} />
          <Route path='/formInvestor' component={FormInvestor} />
          <Route path='/formComplete' component={Success} />
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
