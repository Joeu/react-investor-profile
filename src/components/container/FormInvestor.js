import React, { Component } from 'react';
import FormContext from '../../context/FormContext';
import FormBehaviourQuestion from '../presentational/FormBehaviourQuestion';
import FormInvestmentQuestions from '../presentational/FormInvestmentQuestions';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { INVESTOR_PROFILE_HEADER, BUTTON_BACK, BUTTON_SAVE } from '../../data/utils/constants';


// CSS-IN-JS
const styles = {
  invQuestions: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: '0px 10px 0px 10px',
    padding: '10px 50px 10px 50px',
    fontWeight: 'bold'
  }
}

// Usage of styled components lib
const ButtonControlWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: flex-end;
`;

class FormInvestor extends Component {
  state = {
    dropdownOpen: false,
    behaviourAnswers: {},
    investmentKnowlegdeAnswers: {},
  };

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

  setBehaviourAnswers = ({ id, title, value }) => {
    let { behaviourAnswers } = this.state;
    behaviourAnswers[id] = {'title': title, 'answer': value};
    this.setState({
      behaviourAnswers
    });
  }

  setInvestmentAnswers = ({ type, answer }) => {
    let { investmentKnowlegdeAnswers } = this.state;
    investmentKnowlegdeAnswers[type] = answer;
    this.setState({
      investmentKnowlegdeAnswers
    });
  }

  render() {
    return (
      <FormContext.Consumer>
        {context => (
          context.questions.behaviour.length > 0 &&
          <div>
            <h4>{INVESTOR_PROFILE_HEADER}</h4>
            {
              context.questions.behaviour.map(
                (question) =>
                  <FormBehaviourQuestion
                    key={question.id}
                    question={question}
                    setAnswer={this.setBehaviourAnswers}
                  />
              )
            }
            <p>{context.questions.knowledge.question}</p>
            <div style={styles.invQuestions}>
              {
                context.questions.knowledge.investmentTypes.map(
                  (invType, key) =>
                    <FormInvestmentQuestions
                      key={key}
                      type={invType}
                      options={context.questions.knowledge.options}
                      setAnswer={this.setInvestmentAnswers}
                    />
                )
              }
            </div>
            <ButtonControlWrapper>
              <Button 
                outline color="secondary" 
                style={styles.button} 
                onClick={this.handleBack}
              >
                {BUTTON_BACK}
              </Button>
              <Button color="warning" style={{...styles.button, color: 'white'}} onClick={this.handleSubmit} 
                disabled={
                  !(context.questions.behaviour.length === Object.values(this.state.behaviourAnswers).length
                  && context.questions.knowledge.investmentTypes.length === Object.entries(this.state.investmentKnowlegdeAnswers).length)
                }
              >
                {BUTTON_SAVE}
              </Button>
            </ButtonControlWrapper>
          </div>
        )}
      </FormContext.Consumer>
    );
  }
}

export default FormInvestor;