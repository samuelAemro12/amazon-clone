import React from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

const ProductCard = ({product}) => {
  const {image, title, rating, price} = product;
  return (
    <div>
      <a href={product.url}>
        <img src={image} alt=''/>
      </a>
      <div>
        <h3>{title}</h3>
        <div>
            {/* rating */}
            <Rating value={rating.rate} precision={0.1}/>
            {/* count */}
            <small>{rating.count}</small>
        </div>        
        <div>
            {/* price */}
            <CurrencyFormat amount={price}/>
        </div>
      </div>
      <button>
        add to cart
      </button>
    </div>
  )
}

export default ProductCard;
