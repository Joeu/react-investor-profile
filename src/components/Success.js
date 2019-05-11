import React from 'react';

const Success = (props) => {
  const { behaviourAnswers, investmentKnowlegdeAnswers } = props.data;

  return (
    <div>
      {
        <div>
          <h1>CADASTRO CRIADO COM SUCESSO</h1>
          <h3>PERFIL COMPORTAMENTAL</h3>
          <hr></hr>
          {
            Object.values(behaviourAnswers)
              .map(qa => [qa.title, qa.answer])
              .sort().map((sortedQA, key) =>
                <p key={key}>{sortedQA[0]} - <b>{sortedQA[1]}</b></p>
              )
          }
          <h3>PERFIL DE INVESTIMENTO</h3>
          <hr></hr>
          {
            Object.entries(investmentKnowlegdeAnswers).map(answer =>
              <p key={answer[0]}>{answer[0]} - <b>{answer[1]}</b></p>
            )
          }
        </div>
      }
    </div>
  );
}

export default Success;
