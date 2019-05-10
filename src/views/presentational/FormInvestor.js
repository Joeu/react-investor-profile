import React, { Component } from 'react';
import FormContext from '../../FormContext';
import FormRadioQuestion from './FormRadioQuestion';
import FormSelectQuestion from './FormSelectQuestion';
import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';

class FormInvestor extends Component {
  state = {
    dropdownOpen: false,
    behaviourAnswers: [],
    investmentKnowlegdeAnswers: []
  };

  componentDidMount() {
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleSubmit = () => {
    this.props.history.push('/formComplete', this.state);
  }

  handleBack = () => {
    this.props.history.push('/');
  }

  setRadioAnswers = ({id, title, value}) => {
    this.setState({
      behaviourAnswers: [...this.state.behaviourAnswers, [id, title, value]]
    });
  }

  setSelectAnswers = ({type, answer}) => {
    this.setState({
      investmentKnowlegdeAnswers: [...this.state.investmentKnowlegdeAnswers, [type, answer]]
    });
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
                question => 
                  <FormRadioQuestion 
                    key={question.id} 
                    question={question} 
                    setAnswer={this.setRadioAnswers}
                  />
              )
            }
            <p>{context.questions.knowledge.question}</p>
            <div>
              {
                context.questions.knowledge.investmentTypes.map(
                  (invType, key) =>
                    <Row key={key}>
                      <Col md={6}>
                        <FormSelectQuestion
                          key={key}
                          type={invType}
                          options={context.questions.knowledge.options}
                          setAnswer={this.setSelectAnswers}
                        />
                      </Col>
                    </Row>
                )
              }
            </div>
            <Button outline color="secondary" onClick={this.handleBack}>VOLTAR</Button>{' '}
            <Button color="warning" onClick={this.handleSubmit}>SALVAR</Button>{' '}
          </div>
        )}
      </FormContext.Consumer>
    );
  }
}

export default FormInvestor;