import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';
import Classes from './Product.module.css';
import Loader from '../Loader/Loader';


const Product = () => {
    const [products, setproducts] = useState([]);
    // the upper useState might as well be empty parenthese
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setproducts(res.data);
            isLoading(false);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);
return (
    <>
    {isLoading?(<Loader/>):( <div className={Classes.product}>
            {products.map((singleProduct) => {
                return <ProductCard key={singleProduct.id} product={singleProduct} />
            })
            }
        </div>)}
       
    </> 
  );
}

export default Product;
