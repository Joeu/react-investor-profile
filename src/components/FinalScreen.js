import React from 'react';
import { Button } from 'reactstrap';
import IncompleteData from './IncompleteData';
import Success from './Success';

const FinalScreen = (props) => {
  const handleSubmit = () => {
    props.history.push('/');
  }
  return (
    <div>
      {
        props.location.state.prevPath === '/'
          ? <IncompleteData />
          : <Success data={props.location.state} />
      }
      <Button outline color="secondary" onClick={handleSubmit}>INÍCIO</Button>
    </div>
  );
}

export default FinalScreen;
