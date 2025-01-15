import React, {useContext} from 'react';
import Classes from './Payment.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard.js';

const Payment = () => {
  const [{ user, basket}] = useContext(DataContext);

  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount;
  },0);

  return (
    <LayOut>
      {/* header */}
      <div className={Classes.Payment__header}>
      Cheeckout ({totalItem}) items 
      </div>
      {/* payment method  */}
      <section className={Classes.payment}>
        {/* address */}
        <div className={Classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
           
            <div>Address Street</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <hr/>

        {/* product*/}
        <div className={Classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
        {
          basket?.Map((item)=>{
            return <ProductCard key={item.id} product={item} flex={true}/>
          })
        }
          </div>
        </div>
        <hr/>

        {/* card form */}
        <div className={Classes.flex}>
          <h3>Payment Methods</h3>
          <div>
            
          </div>
        </div>
        <hr/>
      </section>

   
    </LayOut>
  );
}
export default Payment;