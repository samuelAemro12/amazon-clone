import React, { useEffect, useState } from 'react'
import axios from "axios";
const Product = () => {
    const [product, setproduct] = useState();
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/product')
        .then((res) => {
            
        })
    },[]);

return (
        <div>
      
        </div>
  )
}

export default Product;
