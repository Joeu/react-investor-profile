import React from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const InitialInformation = (props) => {
  const answerQuiz = () => {
    console.log('user agrees to anser form');
    props.history.push('/confirmModal');
  }

  return (
    <div>
      <p>Em até 48h daremos um retorno sobre a abertura de sua conta.</p>
      <p>Para receber nossas recomendações de investimentos e começar a investir, precisamos conhecer seu perfil de investidor.</p>
      <p>Serão apenas 4 perguntas, que irão guiar todas as suas decisões de investimentos.</p>
      <p></p>
      <p>Gostaria de responder ao perfil do investidor?.</p>
      <Link
        to={{
          pathname: "/confirmModal",
          state: { modal: true },
        }}
      ></Link>
      <div>
        <Button outline color="secondary">NÃO</Button>
        <Button onClick={answerQuiz} outline color="secondary">SIM</Button>
      </div>
    </div>
  )
}

export default InitialInformation;