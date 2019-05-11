import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

// CSS-IN-JS
const styles = {
  formWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  rowWrapper: {
    flex: '1 1 33%',
    textAlign: 'justify',
    padding: '5px 15px 5px 15px'
  },
  hr: {
    borderTop: '2px dashed #D3D3D3'
  }
}

const FormBehaviourQuestions = (props) => {
  const { question } = props;

  const handleChange = (event) => {
    let {title, id} = question;
    const { value } = event.target;
    props.setAnswer({ id, title, value });
  }

  return (
    <Form>
      <p>{question.title}</p>
      <FormGroup style={styles.formWrapper} onChange={handleChange}>
        {
          question.options.map(opt =>
            <div key={question.id + opt.id} style={styles.rowWrapper}>
              <Input
                type="radio"
                id={question.id + opt.id}
                name="customRadio"
                label={opt.text}
                value={opt.text}
              />
              <span>{opt.text}</span>
            </div>
          )
        }
      </FormGroup>
      <hr style={styles.hr}></hr>
    </Form>
  )

}

export default FormBehaviourQuestions;