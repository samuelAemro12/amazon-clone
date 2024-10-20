import React, { useEffect, useState } from 'react';
import Classes from './ProductDetail.module.css';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endPoint';
import ProductCard from '../../components/Product/ProductCard';

const ProductDetail = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});

  useEffect(()=>{
    axios.get(`${productUrl}/${productId}`)
    .then((res)=>{
      setProduct(res.data);
    }).catch((err)=>{
        console.log(err);
    })
  },[]);
  

  return (
    <LayOut>
      <ProductCard product={product}/>
    </LayOut>
  )
}

export default ProductDetail;
