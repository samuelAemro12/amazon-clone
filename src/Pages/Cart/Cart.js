import React, { useContext } from 'react';
import Classes from './Cart.module.css';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { flushSync } from 'react-dom';

const Cart = () => {
  const [{basket, user}, dispatch] =useContext(DataContext);
  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr/>
          {
            basket?.length == 0 ?(<p>Oops ! No item in your Cart</p>)
            :(basket?.map((item, i)=>{
              return(<ProductCard
                product={item}
                key={i}
                renderDescription={true}
                flex={true}
                renderAdd={false}
              />)
            }))
          }
        </div>
      </section>
    </LayOut>
  )
}

export default Cart;
