import React, { Component } from 'react';
import FormContext from './FormContext';
import { fetchQuestions } from '../data/utils/apiService';

class FormProvider extends Component{
  state = {
    questions: {
      behaviour: [],
      knowledge: []
    }
  }

  componentWillMount() {
    fetchQuestions()
      .then(response => this.setState({
        questions: response.questions
      }))
      .catch(error => {
        console.log(error)
      })
  }

  render() {
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