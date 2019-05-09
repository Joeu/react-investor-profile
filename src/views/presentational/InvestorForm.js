import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import FormRadioQuestion from './FormRadioQuestion';
import { fetchQuestions } from '../../data/utils/apiService';

class InvestorForm extends Component {
  state = {
    dropdownOpen: false,
    behaviourQuestions: [],
    investmentQuestions: []
  };

  componentDidMount() {
    this.setState({

    })
    // fetchQuestions();
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
      <div>
        <h1>PERFIL DO INVESTIDOR</h1>
        
        <FormRadioQuestion 
          question={'1 - Qual o seu comportamento em relação aos seus investimentos?'}
          option1={'PRESERVAR MEU DINIEIRO SEM CORRER RISCOS'}
          option2={'GANHAR MAIS DINHEIRO ASSUMINDO RISCOS MODERADOS'}
          option3={'GANHAR MAIS DINHEIRO ASSUMINDO RISCOS AGRESSIVOS'}
          id1={'q1op1'}
          id2={'q1op2'}
          id3={'q1op3'}
          />
        <FormRadioQuestion 
          question={'2 - Por quanto tempo você deseja manter os seus investimentos?'}
          option1={'ATÉ UM ANO'}
          option2={'DE 1 A 3 ANOS'}
          option3={'DE 1 A 3 ANOS'}
          id1={'q2op1'}
          id2={'q2op2'}
          id3={'q2op3'}
          />
        <FormRadioQuestion 
          question={'3 - Quantos % desses investimentos você pode precisar em um ano?'}
          option1={'ACIMA DE 75%'}
          option2={'DE 26% A 74%'}
          option3={'ATÉ 25%'}
          id1={'q3op1'}
          id2={'q3op2'}
          id3={'q3op3'}
        />
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
        <Button outline color="secondary" onClick={this.handleBack}>VOLTAR</Button>{' '}
        <Button color="warning" onClick={this.handleSubmit}>SALVAR</Button>{' '}
      </div>
    );
  }
}

export default InvestorForm;