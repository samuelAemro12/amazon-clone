import React from 'react';
import { title, imageLink } from './CategoryFetchData';
// although importing title and imagelink is redundent it'd be safer for me to get back to it

const Card = ({data}) => {
  return (
    <div>
      <a href=''>
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt=''/>
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default Card;
