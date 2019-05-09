import React from 'react';
import { FormGroup, CustomInput } from 'reactstrap';

const FormRadioQuestion = (props) => {

  const { question, option1, option2, option3 } = props;

  return (
    <div>
      <p>{question}</p>
      <FormGroup check inline>
        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label={option1} />
        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label={option2} />
        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label={option3} />
      </FormGroup>
      <hr></hr>
    </div>
  )

}

export default FormRadioQuestion;