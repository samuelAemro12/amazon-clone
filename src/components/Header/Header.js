import React from 'react';
import Classes from './Header.module.css';
import FlagIcon from '../../Assets/icons8-usa-50.png';
import SearchIcon from '../../Assets/icons8-search-50 (1).png';

const Header = () => {
  return (
    <>
        <section>
            <div className={Classes.header__container}>
               <div className={Classes.logo__cotainer}>
                <a href='#'>
                <img src='' alt='amazon logo'/>
                </a>
                <div>
                    <span>
                      {/*locationPin icon */}
                    </span>
                    <div className={Classes.delivery}>
                      <p>Delivered To</p>
                      <span>Ethiopia </span>
                    </div>
                </div>
                <div className={Classes.search}>
                  <select name='' id=''>
                    <option value=''>All</option>
                  </select>
                  <input type='text' name='' id='' placeholder='Search product'></input>
                  <img src={SearchIcon} alt=''/>
                </div>
               </div>
                <div className={Classes.order__container}>
                  <a href='' className={Classes.language}>
                    <img src={FlagIcon}/>
                    <select>
                      <option value=''>En</option>
                    </select>
                  </a>
                  <a href=''>
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                  </a>
                  <a href=''>
                    <p>returns</p>
                    <span>& orders</span>
                  </a>
                  <a href='' className={Classes.cart}>
                    {/* cart image */}
                    <span>0</span>
                  </a>
            </div>
          </div>
        </section>
        <div className={Classes.lower__container}>
          {/* hamburger menu icon */}
            <ul>
              <li><p>All</p></li>
              <li>Today's Deals</li>
              <li>Customer Service</li>
              <li>Registry</li>
              <li>Gift Cards</li>
              <li>Sell</li>
            </ul>
        </div>
    </>
  )
}

export default Header;
