import React, { useEffect, useState } from 'react';
import Classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {productUrl} from '../../API/endPoint'
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

const Results = () => {
  const {categoryName} = useParams();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    axios.get(`${productUrl}/products/category/${categoryName}`)
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
        <p className={Classes.paragraph}>Category / {categoryName}</p>
        <hr/>
        {isLoading ? (<Loader/>):
        (<div className={Classes.product__container}>
          {
            result?.map((product)=>{
              return(
              <ProductCard key={product.id} product={product}
                           renderDescription={false} renderAdd={true}/>
            )})
          }
        </div>)
        }
        
      </section>
            
    </LayOut>
  )
}

export default Results
