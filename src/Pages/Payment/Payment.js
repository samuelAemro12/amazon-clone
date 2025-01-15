import React, {useContext, useState} from 'react';
import Classes from './Payment.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard.js';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat.js';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errors, SetErrors] = useState(null);
  const changeHandler = (e) =>{
    console.log(e);
    (e?.error?.message? SetErrors(e?.error?.message): SetErrors(""));
 }
  const [{ user, basket}] = useContext(DataContext);

  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount;
  },0);

  const total =  basket.reduce((amount, item)=> {
    return item.price * item.amount + amount;
   }, 0);

  return (
    <LayOut>
      <div className={Classes.Payment__header}>
      Cheeckout ({totalItem}) items 
      </div>
      <section className={Classes.payment}>
        <div className={Classes.payment__stacker}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>Address Street</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <hr/>
        <div className={Classes.payment__stacker}>
          <h3>Review items and delivery</h3>
          <div>
        {
          basket?.map((item)=>{
            return <ProductCard key={item.id} product={item} flex={true}/>
          })
        }
          </div>
        </div>
        <hr/>
        <div className={Classes.payment__stacker}>
          <h3>Payment Methods</h3>
          <div className={Classes.payment__card}>
            <div className={Classes.info}>
              <form action=''>
              {errors && <small style={{color:"red"}}>{errors}</small>}
                <CardElement style={{gap:"10px"}} onChange={changeHandler}/>
                <div className={Classes.payment__price}>
                  <div>
                    <span style={{display:"flex", gap:"20px"}}>
                        <p>Total Item:</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button>Pay now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr/>
      </section>
    </LayOut>
  );
}
export default Payment;