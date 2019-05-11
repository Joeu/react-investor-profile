import React from 'react';
import { Label } from 'reactstrap';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  flex: 1 0 50%;
`

const FormInvestmentQuestions = (props) => {
  const { type, options } = props;

  const handleChange = (event) => {
    let target = event.target;
    let answer = target.options[target.selectedIndex].value;
    props.setAnswer({ type, answer });
  }

  return (
    <SelectWrapper>
      <div style={{paddingTop: '20px'}}>
        <Label for={type}>{type}</Label>
      </div>
      <div>
        <select type="select" name="select" defaultValue={'default'} id={type} onChange={handleChange}>
          <option value='default' disabled>Selecione uma opção</option>
          {
            options.map((opt, key) =>
              <option value={opt} key={key}>{opt}</option>
            )
          }
        </select>
      </div>
    </SelectWrapper>
  )

}

export default FormInvestmentQuestions;