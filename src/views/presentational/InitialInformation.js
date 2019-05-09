import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ConfirmationModal from './ConfirmationModal';

class InitialInformation extends Component {
  state = {
    isModalOpen: false
  }

  displayConfirmation = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  answerQuiz = () => {
    this.props.history.push('/investorForm');
  }

  render() {
    return (
      <div>
        <p>Em até 48h daremos um retorno sobre a abertura de sua conta.</p>
        <p>Para receber nossas recomendações de investimentos e começar a investir, precisamos conhecer seu perfil de investidor.</p>
        <p>Serão apenas 4 perguntas, que irão guiar todas as suas decisões de investimentos.</p>
        <p></p>
        <p>Gostaria de responder ao perfil do investidor?.</p>
        <div>
          <Button onClick={this.displayConfirmation} outline color="secondary">NÃO</Button>
          <Button onClick={this.answerQuiz} outline color="secondary">SIM</Button>
        </div>
        <ConfirmationModal answerQuiz={this.answerQuiz} toggleModal={this.displayConfirmation} display={this.state.isModalOpen} />
      </div>
    )
  }
}

export default InitialInformation;