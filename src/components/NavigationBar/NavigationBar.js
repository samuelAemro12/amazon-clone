import React from 'react';
import Classes from './NavigationBar.module.css'; 
import MenuIcon from '../../Assets/menu.png';

const NavigationBar = () => {
  return (
    <>
       <nav className={Classes.lower__container}>
        <button className={Classes.menu__button}>
          <img src={MenuIcon} alt="Menu Icon" className={Classes.menu__icon} />
          <span>All</span>
        </button>
        <ul className={Classes.nav__list}>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </nav>
    </>
  )
}

export default NavigationBar;
