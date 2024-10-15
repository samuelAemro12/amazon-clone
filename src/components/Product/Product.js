import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';


const Product = () => {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setproducts(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);
return (
        <div>
            {products.map((singleProduct) => {
                return <ProductCard key={singleProduct.id} product={singleProduct} />
            })
            }
        </div>
  )
}

export default Product;
