import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare
} from 'react-icons/fa';
import './socialLinks.css';

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
    url: 'https://www.facebook.com/rishi.gupta.7731247/'
  },
  {
    id: 2,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/rishi-gupta-9b44ba148/'
  },
  // {
  //   id: 3,
  //   icon: <FaDribbbleSquare className='social-icon'></FaDribbbleSquare>,
  //   url: 'https://www.twitter.com'
  // },
  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className='social-icon'></FaBehanceSquare>,
  //   url: 'https://www.twitter.com'
  // },
  {
    id: 5,
    icon: <FaTwitterSquare className='social-icon'></FaTwitterSquare>,
    url: 'https://twitter.com/RISHIGU39944784'
  }
];
const links = data.map((link) => {
  const onClickHandler = (url) => {
    window.open(url);
  };

  return (
    <li key={link.id}>
      <a className='social-link' onClick={() => onClickHandler(link.url)}>
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  );
};
