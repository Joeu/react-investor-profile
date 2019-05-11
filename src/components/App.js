import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormProvider from '../context/FormProvider';
import InitialInformation from './container/InitialInformation';
import FormInvestor from './container/FormInvestor';
import FinalScreen from './presentational/FinalScreen';

function App() {
  return (
    <FormProvider>
      <Router>
        <main className="App">
          <Route exact path="/" component={InitialInformation} />
          <Route path='/formInvestor' component={FormInvestor} />
          <Route path='/formComplete' component={FinalScreen} />
        </main>
      </Router>
    </FormProvider>
  );
}

export default App;
