import React from 'react';
import Header from '../Header/Header';

const LayOut = ({props}) => {
  return (
    <div>
      <Header/>
      {props}
    </div>
  );
}

export default LayOut;
