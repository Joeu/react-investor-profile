import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ConfirmationModal from './ConfirmationModal';
import { INFO_RECEIVED_SCREEN } from '../data/utils/constants';
import { GoChecklist } from "react-icons/go";
import styled from 'styled-components';

// Usage of CSS-IN-JS
const styles = {
  button: {
    margin: '0px 10px 0px 10px',
    padding: '10px 50px 10px 50px'
  }
}

// Usage of styled-components
const InfoWrapper = styled.div`
  padding-top: 100px;
`;

class InitialInformation extends Component {
  state = {
    isModalOpen: false
  }

  displayConfirmation = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  formInvestorPage = () => {
    this.props.history.push('/formInvestor', {prevPath: this.props.location.pathname});
  }

  formCompletePage = () => {
    this.props.history.push('/formComplete', {prevPath: this.props.location.pathname});
  }

  render() {
    return (
      <InfoWrapper>
        <GoChecklist size={'5em'} />
        <p>INFORMAÇÕES RECEBIDAS</p>
        {
          INFO_RECEIVED_SCREEN.split('\n').map((i, key) => {
            return <p key={key}>{i}</p>
          })
        }
        <div>
          <Button onClick={this.displayConfirmation} outline color="secondary" style={styles.button}>NÃO</Button>
          <Button onClick={this.formInvestorPage} outline color="secondary" style={styles.button}>SIM</Button>
        </div>
        <ConfirmationModal formCompletePage={this.formCompletePage} toggleModal={this.displayConfirmation} display={this.state.isModalOpen} />
      </InfoWrapper>
    )
  }
}

export default InitialInformation;