import React, { useEffect, useContext } from 'react';
import './App.css';
import Routers from '../src/Router';
import { DataContext } from './components/DataProvider/DataProvider';
import { Type } from './Utility/action.type';
import { auth } from './Utility/Firebase';

function App() {
  const [{user},dispatch] = useContext(DataContext);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        dispatch({
          type:Type.SET_USER,
          user:authUser
        });
      } else {
        dispatch({
          type:Type.SET_USER,
          user:null
        });
      }
    })

  },[])


  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
