import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    padding: '5px 70px 5px 70px',
    color: 'white',
    fontWeight: 'bold'
  }
}

class ConfirmationModal extends Component {
  state = {
    checked: false
  };

  toggleButton = () => {
    this.setState({
      checked: !this.state.checked
    });
  }

  handleConfirm = () => {
    this.props.formCompletePage();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.display} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleModal}>Termo</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter style={styles.footer}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={this.toggleButton} />{' '}
                Li e aceito os termos e condições acima
                </Label>
            </FormGroup>
            <Button color="warning" onClick={this.handleConfirm} disabled={!this.state.checked} style={styles.button}>OK, ENTENDI</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfirmationModal;
