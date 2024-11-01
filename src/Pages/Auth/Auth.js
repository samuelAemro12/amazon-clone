import React, {useState, useContext} from 'react';
import Classes from './Auth.module.css'
import { Link } from 'react-router-dom';
import Amazonimg from '../../Assets/AmazonLogoForSignUp.jpg';
import {auth} from '../../Utility/Firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {DataContext} from '../../components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


const Auth = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{user}, dispatch] = useContext(DataContext)

  const authHandler = async (e)=>{
      e.preventDefault();

      // console.log(e.target.value);

    if (e.target.name == "signin") {
      // firbase authentication
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInformation)=>{
          dispatch({
            type:Type.SET_USER,
            user:userInformation.user
       })
      }).catch((error)=>{
        console.log(error);
        
      })
    } else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInformation)=>{
          dispatch({
            type:Type.SET_USER,
            user:userInformation.user
       });
      }).carch((error)=>{
        console.log(error);
        
      })
    }
  };
  // console.log(password, email);

  return (
    <section className={Classes.signin}>
      <Link>
      <img src={Amazonimg} alt='Amazon logo'></img>
      </Link>

      <div className={Classes.signin__container}>
        <h1>Sign In</h1>
        <form action=''>
          <div>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id='email'></input>
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)} type='password' id='password'></input>
          </div>
          <button className={Classes.signin__button}
                  type="submit" onClick={authHandler}
                  name='signin'
          >Sign in</button>
        </form>
        <p>
          By Signing-in you agree to the AMAZON CLONE BY SAMUEL AEMRO conditions of use &
          Sale. Please see our privacy Notice. our Cookies Notice and our 
          Intrest-Based Ads Notice.
        </p>

        <button className={Classes.account__create__button}
                type="submit" onClick={authHandler} name='signun'
        >Create your Amazon account</button>
      </div>
    </section>
  )
}

export default Auth;
