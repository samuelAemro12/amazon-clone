import React, { useEffect, useState } from 'react';
import Classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {productUrl} from '../../API/endPoint'
import ProductCard from '../../components/Product/ProductCard';

const Results = () => {
  const {catergoryName} = useParams();
  const [result, setResult] = useState([]);
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${catergoryName}`)
    .then((res)=>{
      setResult(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <LayOut >
      <section>
        <h1 className={Classes.title}>Results</h1>
        <p className={Classes.paragraph}>Category / {catergoryName}</p>
        <hr/>
        <div className={Classes.product__container}>
          {
            result?.map((product)=>{
              return(
              <ProductCard key={product.id} product={product}/>
            )})
          }
        </div>
      </section>
            
    </LayOut>
  )
}

export default Results
