import React, { useEffect, useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../../constants/Links';
import './Navbar.css';
import { Link as ReactRouterLink } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [navClassName, setNavClassName] = useState('navbar');

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 80) {
        setNavClassName('navbar navbar-fixed');
      } else {
        setNavClassName('navbar');
      }
    });
  }, []);

  return (
    <nav className={navClassName}>
      <div className='nav-center'>
        <div className='nav-header'>
          <ReactRouterLink to='/'>
            <a href='' className='logo'>
              <span className='grey-color'> &lt;</span>
              <span className='logo-name'>Rishi Gupta</span>
              <span className='grey-color'>/&gt;</span>
            </a>
          </ReactRouterLink>
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass='nav-links' />
      </div>
    </nav>
  );
};

export default Navbar;
