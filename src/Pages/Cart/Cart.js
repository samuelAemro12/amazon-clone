import React, { useContext } from 'react';
import Classes from './Cart.module.css';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [{basket, user}, dispatch] =useContext(DataContext);
  const total =  basket.reduce((amount, item)=> {
   return item.price + amount;
  })

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
        
        {
          basket?.length !==0 &&(
            <div>
              <div>
                <p>Subtotal 9({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type='checkbox'/>
                <small>This order contains a gift</small>
              </span>
              <Link to = "/payments">Continue to checkout</Link>
            </div>
          )
        }
      </section>
    </LayOut>
  )
}

export default Cart;
