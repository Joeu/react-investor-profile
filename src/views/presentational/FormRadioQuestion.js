import React from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';

const FormRadioQuestion = (props) => {
  const { question } = props;

  return (
    <Form>
      <p>{question.title}</p>
      <FormGroup check inline>
        {
          question.options.map(opt => 
            <CustomInput 
              type="radio" 
              id={question.id + opt.id} 
              key={question.id + opt.id} 
              name="customRadio" 
              label={opt.text} />
          )
        }
      </FormGroup>
      <hr></hr>
    </Form>
  )

}

export default FormRadioQuestion;