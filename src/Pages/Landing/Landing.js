import React from 'react';
import LayOut from '../../components/LayOut/LayOut';
import CarouselEffect from '../../components/Carousel/Carousel';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';

const Landing = () => {
  return (
    <LayOut>
        <CarouselEffect/> 
        <Category/>
        <Product/> 
    </LayOut>
  );
}

export default Landing;
