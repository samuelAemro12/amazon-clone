import React from 'react';
import { CategoryFetchData } from './CategoryFetchData';
import Classes from './Category.module.css';
import Card from './Card';

const Category = () => {
  return (
    <div className={Classes.Category__container}>
      <section className={Classes.section}>
        {
            CategoryFetchData.map((data)=>{
               return <Card data={data} key={data.name}/>
            })
        }
      </section>
    </div>
  );
}

export default Category;
