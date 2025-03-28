import React, { useEffect, useState } from 'react';
import Classes from './ProductDetail.module.css';
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

const ProductDetail = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading]  = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false);
    }).catch((err)=>{
        console.log(err);
        setIsLoading(false);
    })
  },[productId]);
  

  return (
    <LayOut>
      {isLoading?(<Loader/>):(
      <ProductCard product={product}
        flex ={true}
        renderDescription={true}
        renderAdd={true}
      />)}
    </LayOut>
  );
}  

export default ProductDetail;
