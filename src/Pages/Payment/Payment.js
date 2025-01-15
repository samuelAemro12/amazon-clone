import React, {useContext} from 'react';
import Classes from './Payment.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard.js';
import {useStripe, useElements} from '@stripe/react-stripe-js';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [{ user, basket}] = useContext(DataContext);

  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount;
  },0);

  return (
    <LayOut>
      <div className={Classes.Payment__header}>
      Cheeckout ({totalItem}) items 
      </div>
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>Address Street</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <hr/>
        <div className={Classes.flex}>
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
        <div className={Classes.flex}>
          <h3>Payment Methods</h3>
          <div>
            <div>
              <form action=''>

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