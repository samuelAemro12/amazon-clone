import React from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Classes from './Product.module.css';


const ProductCard = ({product}) => {
  const {image, title, rating, price} = product;
  return (
    <div className={Classes.ProductCard}>
      <a href={product.url}>
        <img src={image} alt='' className={Classes.image}/>
      </a>
      <div className={Classes.product__details}>
        <h3>{title}</h3>
        <div className={Classes.rating__container}>
            <Rating value={rating.rate} precision={0.1}/>
            <small>{rating.count}</small>
        </div>        
        <div className={Classes.pricing}>
            <CurrencyFormat amount={price}/>
        </div>
      </div>
      <button className={Classes.add__cart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard;
