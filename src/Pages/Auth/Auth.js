import React from 'react';
import Classes from './Auth.module.css'
import { Link } from 'react-router-dom';
import Amazonimg from '../../Assets/AmazonLogoForSignUp.jpg';
const Auth = () => {
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
            <input type='email' id='email'></input>
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input type='password' id='password'></input>
          </div>
          <button className={Classes.signin__button}>Sign in</button>
        </form>
        <p>
          By Signing-in you agree to the AMAZON CLONE BY SAMUEL AEMRO conditions of use &
          Sale. Please see our privacy Notice. our Cookies Notice and our 
          Intrest-Based Ads Notice.
        </p>

        <button className={Classes.account__create__button}>Create your Amazon account</button>
      </div>
    </section>
  )
}

export default Auth;
