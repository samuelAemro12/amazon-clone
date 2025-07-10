import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LayOut = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default LayOut;
