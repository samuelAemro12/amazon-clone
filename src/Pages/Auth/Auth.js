import React, {useState, useContext} from 'react';
import Classes from './Auth.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Amazonimg from '../../Assets/AmazonLogoForSignUp.jpg';
import {auth} from '../../Utility/Firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {DataContext} from '../../components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
import { RiseLoader } from 'react-spinners';


const Auth = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{user}, dispatch] = useContext(DataContext)
  const [isLoading, setIsLoading]  = useState({
    signIn:false,
    signUp:false
  });
  const navigate = useNavigate();

  const navData = useLocation();

  const authHandler = async (e)=>{
      e.preventDefault();

      // Basic validation
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      // Clear any previous errors
      setError("");

    if (e.target.name === "signin") {
      // Firebase authentication - Sign In
      setIsLoading({...isLoading, signIn:true});
      signInWithEmailAndPassword(auth, email, password)
      .then((userInformation)=>{
          dispatch({
            type:Type.SET_USER,
            user:userInformation.user
       });
       setIsLoading({...isLoading, signIn:false});
       navigate(navData?.state?.redirect || "/");
      }).catch((err)=>{
        setError(err.message);
        setIsLoading({...isLoading, signIn:false})
      })
    } else if (e.target.name === "signup") {
      // Firebase authentication - Sign Up
      setIsLoading({...isLoading, signUp:true});
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInformation)=>{
          dispatch({
            type:Type.SET_USER,
            user:userInformation.user
       });
       setIsLoading({...isLoading, signUp:false});
       navigate(navData?.state?.redirect || "/");
      }).catch((err)=>{
        setError(err.message);
        setIsLoading({...isLoading, signUp:false})
      })
    }
  };
  // console.log(password, email);

  return (
    <section className={Classes.signin}>
      <Link to={"/"}>
      <img src={Amazonimg} alt='Amazon logo'></img>
      </Link>

      <div className={Classes.signin__container}>
        <h1>Sign In</h1>
          {navData?.state?.msg && (
            <small style={{padding:"5px",
                    textAlign:"center", color:"red", fontWeight:"bold"}}>
              {navData?.state?.msg}
            </small>
          )
          }
          
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
          >{
            isLoading.signIn ? (
              <RiseLoader size={6} color="black"/>
            ):("Sign In")
          }
          </button>
        </form>
        <p>
          By Signing-in you agree to the AMAZON CLONE BY SAMUEL AEMRO conditions of use &
          Sale. Please see our privacy Notice. our Cookies Notice and our 
          Intrest-Based Ads Notice.
        </p>

        <button className={Classes.account__create__button}
                type="submit" onClick={authHandler} name='signup'
        >
          {
            isLoading.signUp ? (
              <RiseLoader size={6} color="black"/>
            ):("Create your Amazon Account")
          }
        </button>
        {error && <small
          style={{paddingTop:"5px",
            color:"red"
          }}        
        >{error}</small>}
      </div>
    </section>
  )
}

export default Auth;
