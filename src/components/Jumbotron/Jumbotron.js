import React from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';
import SocialLinks from '../../constants/socialLinks/';
import './Jumbotron.css';
import FeelingProud from './FeelingProud';

const Jumbotron = () => {
  return (
    <header className='jumbotron'>
      <div className='section-center jumbotron-center'>
        <article className='jumbotron-info'>
          <div>
            <div className='underline'></div>
            <h1>i'm rishi gupta</h1>
            <h4>a development architect 🚀 </h4>
            <h4>i design website's</h4>
            <ReactRouterLink to='/contact' className='btn'>
              contact me
            </ReactRouterLink>
            <a href='/' className='btn btn-resume'>
              See my Resume
            </a>
            <SocialLinks />
          </div>
        </article>
        <FeelingProud className='jumbotron-img' />
      </div>
    </header>
  );
};

export default Jumbotron;
