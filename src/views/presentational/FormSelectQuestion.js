import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormSelectQuestion = (props) => {

  const { type, options } = props;

  const handleChange = (event) => {
    let target = event.target;
    let answer = target.options[target.selectedIndex].value;
    props.setAnswer({ type, answer });
  }

  return (
    <div>
      <Label for={type}>{type}</Label>
      <select type="select" name="select" id={type} onChange={handleChange}>
        {
          options.map((opt, key) =>
            <option value={opt} key={key}>{opt}</option>
          )
        }
      </select>
    </div>
  )

}

export default FormSelectQuestion;