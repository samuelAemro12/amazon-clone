import React, {useContext, useState} from 'react';
import Classes from './Payment.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard.js';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat.js';
import { axiosInstance } from '../../API/axios.js';
import { RiseLoader } from 'react-spinners';
import {db} from '../../Utility/Firebase.js';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [errors, SetErrors] = useState(null);
  const [processing, SetProcessing] = useState(false);
  const changeHandler = (e) =>{
    console.log(e);
    (e?.error?.message? SetErrors(e?.error?.message): SetErrors(""));
 }
  const handlePayment = async (e) =>{
    e.preventDefault();
    try {
      // 1. backend || function contact the client secret 
      SetProcessing(true);
      const response = await axiosInstance({
        method:"post",
        url:`/payment/create?total=${total*100}`
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // 2. client side (react side confirmation)
      const {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,{
          payment_method:{
            card:elements.getElement(CardElement),
          }}
      );
      console.log(paymentIntent);
        // 3. order firestore databse save and clear basket
      await db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      });
        SetProcessing(false);
        navigate("/orders", {
          state:{msg:"you have successfully placed your new order"}}
        );
    } catch (error) {
      console.log(error);
      SetProcessing(false);
    }
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
              <form onSubmit={handlePayment}>
              {errors && <small style={{color:"red"}}>{errors}</small>}
                <CardElement style={{gap:"10px"}} onChange={changeHandler}/>
                <div className={Classes.payment__price}>
                  <div>
                  {/* credit cared nmber just put 4242... in this pattern */}
                    <span style={{display:"flex", gap:"20px"}}>
                        <p>Total Item:</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button>
                  {
                    processing? (
                    <div className={Classes.payment__loader}>
                      <RiseLoader color={"#f0c14b"} size={10}/>
                    </div>
                    ):"Buy Now"
                  }
                  </button>
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