import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ConfirmationModal from './ConfirmationModal';
import { INFO_RECEIVED_SCREEN } from '../../data/utils/constants';
import { GoChecklist } from "react-icons/go";

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
        <GoChecklist size={'5em'} />
        <p>INFORMAÇÕES RECEBIDAS</p>
        {
          INFO_RECEIVED_SCREEN.split('\n').map((i, key) => {
            return <p key={key}>{i}</p>
          }) 
        }
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