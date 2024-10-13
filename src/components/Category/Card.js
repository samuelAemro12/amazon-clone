import React from 'react';
import { title, imageLink } from './CategoryFetchData';
// although importing title and imagelink is redundent it'd be safer for me to get back to it
import Classes from './Category.module.css';

const Card = ({data}) => {
  return (
    <div className={Classes.card}>
      <a href=''>
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt=''/>
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default Card;
