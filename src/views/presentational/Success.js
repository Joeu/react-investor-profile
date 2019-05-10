import React from 'react';
import { Button } from 'reactstrap';

const Success = (props) => {
  const { behaviourAnswers, investmentKnowlegdeAnswers } = props.location.state;

  const handleSubmit = () => {
    props.history.push('/');
  }

  return (
    <div>
      <h1>CADASTRO CRIADO COM SUCESSO</h1>
      <h3>PERFIL COMPORTAMENTAL</h3>
      {
        behaviourAnswers.map(answer =>
          <p key={answer[0]}>{answer[1]}: {answer[2]}</p>
        )
      }
      <h3>PERFIL DE INVESTIMENTO</h3>
      {
        investmentKnowlegdeAnswers.map(answer =>
          <p key={answer[0]}>{answer[0]}: {answer[1]}</p>
        )
      }
      <Button outline color="secondary" onClick={handleSubmit}>FINALIZAR</Button>
    </div>
  );
}

export default Success;
