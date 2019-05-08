import React from 'react';
import { Button } from 'reactstrap';
import { Col, Row, Form, FormGroup, CustomInput, Label, Input } from 'reactstrap';

class InvestorForm extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleSubmit = () => {
    this.props.history.push('/formComplete')
  }

  render() {
    return (
      <Form>
        <h1>PERFIL DO INVESTIDOR</h1>

        <div>
          <p>1 - Qual o seu comportamento em relação aos seus investimentos?</p>
          <FormGroup check inline>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Or this other one" />
          </FormGroup>
          <hr></hr>
        </div>
        <div>
          <p>2 - Por quanto tempo você deseja manter os seus investimentos?</p>
          <FormGroup check inline>
            <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="ATÉ UM ANO" />
            <CustomInput type="radio" id="exampleCustomRadio5" name="customRadio" label="Or this one" />
            <CustomInput type="radio" id="exampleCustomRadio6" name="customRadio" label="DE 1 A 3 ANOS" />
          </FormGroup>
          <hr></hr>
        </div>
        <div>
          <p>3 - Quantos % desses investimentos você pode precisar em um ano?</p>
          <FormGroup check inline>
            <CustomInput type="radio" id="exampleCustomRadio7" name="customRadio" label="ACIMA DE 75%" />
            <CustomInput type="radio" id="exampleCustomRadio8" name="customRadio" label="DE 26% A 74%" />
            <CustomInput type="radio" id="exampleCustomRadio9" name="customRadio" label="ATÉ 25%" />
          </FormGroup>
          <hr></hr>
        </div>
        <div>
          <p>4 - Qual sua familiaridade com os tipos de investimentos abaixo?</p>
          <p>Leve em consideração o valor aplicado nos últimos 2 anos.</p>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">TÍTULOS DE RENDA FIXA OU TESOURO DIRETO</Label>
                <Input type="select" name="select" id="tesouroSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">FUNDOS DE INVESTIMENTO</Label>
                <Input type="select" name="select" id="fundosSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">AÇÕES À VISTA</Label>
                <Input type="select" name="select" id="tesouroSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS</Label>
                <Input type="select" name="select" id="fundosSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <Button outline color="secondary">VOLTAR</Button>{' '}
        <Button color="warning" onClick={this.handleSubmit}>SALVAR</Button>{' '}
      </Form>
    );
  }
}

export default InvestorForm;