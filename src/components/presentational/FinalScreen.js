import React from 'react';
import { Button } from 'reactstrap';
import IncompleteData from './IncompleteData';
import Success from './Success';
import { BACK_TO_START } from '../../data/utils/constants';

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
      <Button outline color="secondary" onClick={handleSubmit}>{BACK_TO_START}</Button>
    </div>
  );
}

export default FinalScreen;
