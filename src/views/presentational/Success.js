import React from 'react';
import { Button } from 'reactstrap';

const Success = (props) => {

  const handleSubmit = () => {
    props.history.push('/');
  }

  return (
    <div>
      <div>CADASTRO CRIADO COM SUCESSO</div>
      <Button outline color="secondary" onClick={handleSubmit}>FINALIZAR</Button>
    </div>
  );
}

export default Success;
