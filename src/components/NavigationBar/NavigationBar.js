import React, { useState, useEffect, useCallback } from 'react';
import Classes from './NavigationBar.module.css'; 
import MenuIcon from '../../Assets/menu.png';

const MOBILE_BREAKPOINT = 576;

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <nav className={Classes.lower__container}>
      {/* Only show menu button and drawer on mobile */}
      {isMobile && (
        <>
          <button
            className={Classes.menu__button}
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
          >
            <img src={MenuIcon} alt="Menu Icon" className={Classes.menu__icon} />
            <span>All</span>
          </button>
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
      )}
      {/* Only show horizontal nav list on desktop */}
      {!isMobile && (
        <ul className={Classes.nav__list}>
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavigationBar;
