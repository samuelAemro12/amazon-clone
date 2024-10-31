import React from 'react';
import Classes from './Auth.module.css'
import { Link } from 'react-router-dom';
import Amazonimg from '../../Assets/AmazonLogoForSignUp.jpg';
const Auth = () => {
  return (
    <section>
      <Link>
      <img src={Amazonimg} alt='Amazon logo'></img>
      </Link>
    </section>
  )
}

export default Auth;
