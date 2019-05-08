import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class ConfirmationModal extends Component {
  state = {
    modal: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    this.props.history.push('/investorForm');
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Termo</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                  Li e aceito os termos e condições acima
                </Label>
            </FormGroup>
            <Button color="secondary" onClick={this.toggle}>OK, ENTENDI</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfirmationModal;
