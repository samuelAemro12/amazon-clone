import React from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

const ProductCard = ({product}) => {
  return (
    <div>
      <a href={product.url}>
        <img src='' alt=''/>
      </a>
      <div>
        <h3>product.title</h3>
        <div>
            {/* rating */}
            <Rating value={5} precision={0.1}/>
            {/* count */}
            <small>{60}</small>
        </div>        
        <div>
            {/* price */}
            <CurrencyFormat amount={22.14}/>
        </div>
      </div>
      <button>
        add to cart
      </button>
    </div>
  )
}

export default ProductCard;
