import React from 'react';
import Classes from './Carousel.module.css'; 
import { Carousel } from 'react-responsive-carousel';
import { ImageArray } from '../Carousel/ImagesForCarousel/ImageDatamapperArray';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // the css libarary from npmjs.com by installing react-responsive-carousel 

const CarouselEffect = () => {
  return (
    <div>
      {/* Got react-responsive-carousel dependency */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          ImageArray.map((ImageItemLink)=>{
            return <img alt='' src={ImageItemLink}/>
          })
        }
      </Carousel>
      <div className={Classes.image__style}></div>
    </div>
  )
}

export default CarouselEffect;
