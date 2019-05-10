import React, { Component } from 'react';
import FormContext from '../../FormContext';
import FormRadioQuestion from './FormRadioQuestion';
import FormSelectQuestion from './FormSelectQuestion';
import { Form, Button } from 'reactstrap';


class InvestorForm extends Component {
  state = {
    dropdownOpen: false,
    behaviourQuestions: [],
    investmentQuestions: []
  };

  componentDidMount() {
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleSubmit = () => {
    this.props.history.push('/formComplete');
  }

  handleBack = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <FormContext.Consumer>
        {context => (
          context.questions.behaviour.length > 0 &&
          <div>
            <h1>PERFIL DO INVESTIDOR</h1>
            {
              context.questions.behaviour.map(
                question => {
                  return <FormRadioQuestion key={question.id} question={question} />
                }
              )
            }
            <p>{context.questions.knowledge.question}</p>
            <Form>

            {
              context.questions.knowledge.investmentTypes.map(
                (invType, key) => {
                  return <FormSelectQuestion
                  key={key}
                    type={invType}
                    options={context.questions.knowledge.options}
                    />
                  }
                  )
                }
            </Form>
            <Button outline color="secondary" onClick={this.handleBack}>VOLTAR</Button>{' '}
            <Button color="warning" onClick={this.handleSubmit}>SALVAR</Button>{' '}
          </div>
        )}
      </FormContext.Consumer>

    );
  }
}

export default InvestorForm;