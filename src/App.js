import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import InitialInformation from './views/presentational/InitialInformation';
// import ConfimationModal from './views/presentational/ConfirmationModal';
import InvestorForm from './views/presentational/InvestorForm';
import Success from './views/presentational/Success';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={InitialInformation} />
        {/* <Route path='/confirmModal' component={ConfimationModal} /> */}
        <Route path='/investorForm' component={InvestorForm} />
        <Route path='/formComplete' component={Success} />
      </div>
    </Router>
  );
}

export default App;
