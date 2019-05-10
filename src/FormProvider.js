import React, { Component } from 'react';
import FormContext from './FormContext';
import { fetchQuestions } from './data/utils/apiService';

class FormProvider extends Component{
  state = {
    questions: {
      behaviour: [],
      knowledge: []
    }
  }

  componentDidMount() {
    fetchQuestions()
      .then(response => this.setState({
        questions: response.questions
      }))
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state);
    return (
      <FormContext.Provider
        value={{
          questions: this.state.questions
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    )
  }
}

export default FormProvider;