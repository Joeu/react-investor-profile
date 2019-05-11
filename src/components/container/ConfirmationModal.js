import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { ACCEPT_TERMS, TERM_HEADER, MODAL_TEXT, TERM_OK_BUTTON } from '../../data/utils/constants';

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
          <ModalHeader toggle={this.props.toggleModal}>{TERM_HEADER}</ModalHeader>
          <ModalBody>
            {MODAL_TEXT}
          </ModalBody>
          <ModalFooter style={styles.footer}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={this.toggleButton} />{' '}
                  {ACCEPT_TERMS}
                </Label>
            </FormGroup>
            <Button color="warning" onClick={this.handleConfirm} disabled={!this.state.checked} style={styles.button}>{TERM_OK_BUTTON}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfirmationModal;
