import React, { useContext } from 'react';
import Classes from './Header.module.css'; 
import FlagIcon from '../../Assets/icons8-usa-50.png';
import SearchIcon from '../../Assets/icons8-search-50 (1).png';
import CartIcon from '../../Assets/cartImg.jpeg';
import AmazonLogo from '../../Assets/amazonLogo.png';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/Firebase';


const Header = () => {
  const [{user, basket}, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount
  }, 0)

  return (
    <>
      <header className={Classes.header__container}>
        <div className={Classes.left__section}>
          <Link to="/" className={Classes.logo__link}>
            <img src={AmazonLogo} alt="Amazon Logo" className={Classes.logo__img} />
          </Link>
          <div className={Classes.delivery__info}>
            <span className={Classes.location__icon}>📍</span>
            <div>
              <p className={Classes.delivery__text}>Deliver to</p>
              <span className={Classes.delivery__location}>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={Classes.search__container}>
          <select className={Classes.search__select}>
            <option value="all">All</option>
          </select>
          <input type="text" className={Classes.search__input} placeholder="Search Products" />
          <button className={Classes.search__button}>
            <img src={SearchIcon} alt="Search Icon" className={Classes.search__icon} />
          </button>
        </div>
        <div className={Classes.right__section}>
          <div className={Classes.language__container}>
            <img src={FlagIcon} alt="Language" />
            <select className={Classes.language__select}>
              <option value="en">EN</option>
            </select>
          </div>
          <Link to={!user && "/auth"} className={Classes.account__link}>
            <div>
              {
                user?
                  (<>
                   <p>Hello {user?.email?.split("@")[0]}</p>
                   <span onClick={()=>auth.signOut()}>
                    Sign Out</span>
                  </> ):                
              (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )
              }
            </div>
          </Link>
          <Link to="/orders" className={Classes.orders__link}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={Classes.cart__link}>
            <img src={CartIcon} alt="Cart" className={Classes.cart__img} />
            {/* <span className={Classes.cart__count}>{basket ? basket.length : 0}</span> */}
            <span className={Classes.cart__count}>{totalItem}</span>

          </Link>
        </div>
      </header>
      <NavigationBar/>
    </>
  );
};

export default Header;