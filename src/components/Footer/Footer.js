import React from 'react';
import SocialLinks from '../../constants/socialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <SocialLinks styleClass='footer-links'></SocialLinks>
        <h4>Are you interested in working with me or just have a question?</h4>
        <h4>
          Email me at &nbsp;
          <a
            href='mailto:guptarishi013@gmail.com'
            className='contact-email-footer'
          >
            guptarishi013@gmail.com
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
