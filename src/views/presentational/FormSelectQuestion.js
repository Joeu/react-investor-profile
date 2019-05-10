import React from 'react';
import { FormGroup, Row, Col, Label, Input } from 'reactstrap';

const FormSelectQuestion = (props) => {
  const { type, options } = props;

  return (
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label>{type}</Label>
          <Input type="select" name="select" id={type}>
            {
              options.map((opt, key) => 
                <option key={key}>{opt}</option>
              )
            }
          </Input>
        </FormGroup>
      </Col>
    </Row>
  )

}

export default FormSelectQuestion;