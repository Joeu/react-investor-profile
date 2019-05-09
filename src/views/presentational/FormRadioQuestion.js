import React from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';

const FormRadioQuestion = (props) => {

  const { question, option1, option2, option3, id1, id2, id3 } = props;

  return (
    <Form>
      <p>{question}</p>
      <FormGroup check inline>
        <CustomInput type="radio" id={id1} name="customRadio" label={option1} />
        <CustomInput type="radio" id={id2} name="customRadio" label={option2} />
        <CustomInput type="radio" id={id3} name="customRadio" label={option3} />
      </FormGroup>
      <hr></hr>
    </Form>
  )

}

export default FormRadioQuestion;