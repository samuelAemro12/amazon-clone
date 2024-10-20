import React from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Classes from './Product.module.css';
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
  const {image, title, id, rating, price} = product;
  return (
    <div className={Classes.Product__card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt='' className={Classes.image}/>
      </Link>
      <div className={Classes.product__details}>
        <h3>{title}</h3>
        <div className={Classes.rating}>
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
