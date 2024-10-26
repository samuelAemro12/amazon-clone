import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Classes from './Product.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

const ProductCard = ({product, flex, renderDescription,  renderAdd}) => {
  const {image, title, id, rating ={}, price, description} = product;
  
  const [state, dispatch ] = useContext(DataContext);

  const addToCart = () =>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image, title, id, rating, price, description
      }
    })
  }
  
  
  return (
    <div className={`${Classes.Product__card} ${flex?Classes.product__flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={Classes.image}/>
      </Link>
      <div className={Classes.product__details}>
        <h3>{title}</h3>
        {renderDescription && <div style={{maxWidth:"750px"}}
        >{description}</div>}
        <div className={Classes.rating}>
            <Rating value={rating?.rate || 0} precision={0.1}/>
            <small>{rating?.count}</small>
        </div>        
        <div className={Classes.pricing}>
            <CurrencyFormat amount={price}/>
        </div>
      </div>
      {
        renderAdd && 
        <button className={Classes.add__cart} onClick={addToCart}>
          Add to Cart
        </button> 
      }
      
    </div>
  )
}

export default ProductCard;
