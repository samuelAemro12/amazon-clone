import React, { useState, useEffect, useCallback } from 'react';
import Classes from './NavigationBar.module.css'; 
import MenuIcon from '../../Assets/menu.png';

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on ESC key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setDrawerOpen(false);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen, handleKeyDown]);

  const navItems = [
    "Today's Deals",
    'Customer Service',
    'Registry',
    'Gift Cards',
    'Sell',
  ];

  return (
    <>
      <nav className={Classes.lower__container}>
        <button
          className={Classes.menu__button}
          aria-label="Open navigation menu"
          onClick={() => setDrawerOpen(true)}
        >
          <img src={MenuIcon} alt="Menu Icon" className={Classes.menu__icon} />
          <span>All</span>
        </button>
        <ul className={Classes.nav__list}>
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
      {/* Side Drawer and Overlay */}
      <div
        className={drawerOpen ? Classes.drawer__overlay + ' ' + Classes.drawer__overlay__active : Classes.drawer__overlay}
        onClick={() => setDrawerOpen(false)}
        tabIndex={drawerOpen ? 0 : -1}
        aria-hidden={!drawerOpen}
      />
      <aside
        className={drawerOpen ? Classes.side__drawer + ' ' + Classes.side__drawer__open : Classes.side__drawer}
        aria-hidden={!drawerOpen}
        tabIndex={-1}
      >
        <button
          className={Classes.drawer__close__button}
          aria-label="Close navigation menu"
          onClick={() => setDrawerOpen(false)}
        >
          &times;
        </button>
        <ul className={Classes.drawer__nav__list}>
          {navItems.map((item) => (
            <li key={item} onClick={() => setDrawerOpen(false)}>{item}</li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default NavigationBar;
