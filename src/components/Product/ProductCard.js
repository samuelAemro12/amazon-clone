import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div>
      <a href={product.url}>
        <img src='' alt=''/>
      </a>
      <div>
        <h3>product.title</h3>
        <div>
            {/* rating */}
            {/* price */}
        </div>        
        <div>
            {/* price */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
