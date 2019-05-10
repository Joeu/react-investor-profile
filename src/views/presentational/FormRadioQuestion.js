import React from 'react';
import { Form, FormGroup, CustomInput } from 'reactstrap';

const FormRadioQuestion = (props) => {
  const { question } = props;

  const handleChange = (event) => {
    let title = question.title;
    const { id, value } = event.target;
    props.setAnswer({id, title, value});
  }

  return (
    <Form>
      <p>{question.title}</p>
      <FormGroup check inline onChange={handleChange}>
        {
          question.options.map(opt =>
            <CustomInput
              type="radio"
              id={question.id + opt.id}
              key={question.id + opt.id}
              name="customRadio"
              label={opt.text}
              value={opt.text} />
          )
        }
      </FormGroup>
      <hr></hr>
    </Form>
  )

}

export default FormRadioQuestion;