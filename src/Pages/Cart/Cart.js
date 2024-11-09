import React, { useContext } from 'react';
import Classes from './Cart.module.css';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type';


const Cart = () => {
  const [{basket, user}, dispatch] =useContext(DataContext);
  const total =  basket.reduce((amount, item)=> {
   return item.price * item.amount + amount;
  }, 0)

const increment = (item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET, item
  })
}

const decrement = (id) =>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET, id
  })
}

  return (
    <LayOut>
      <section className={Classes.container__section}>
        <div className={Classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr/>
          {
            basket?.length == 0 ?(<p>Oops ! No item in your Cart</p>)
            :(basket?.map((item, i)=>{
              return(
             <section className={Classes.cart__product}>
               
               <ProductCard
                product={item}
                key={i}
                renderDescription={true}
                flex={true}
                renderAdd={false}
              />
              <div className={Classes.btn__wrapper}>
                <button className={Classes.btn} onClick={()=>increment(item)}>+</button>
                <span>{item.amount}</span>
                <button className={Classes.btn} onClick={()=>decrement(item.id)}>-</button>
              </div>
             </section>
              )
            }))
          }
        </div>
        
        {
          basket?.length !==0 &&(
            <div className={Classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type='checkbox'/>
                <small>This order contains a gift</small>
              </span>
              <Link to = "/payment">Continue to checkout</Link>
            </div>
          )
        }
      </section>
    </LayOut>
  )
}

export default Cart;
