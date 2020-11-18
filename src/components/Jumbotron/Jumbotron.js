import React from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';
import SocialLinks from '../../constants/socialLinks/';
import './Jumbotron.css';
import FeelingProud from './FeelingProud';

const Jumbotron = () => {
  const theme = {
    body: '#EDF9FE',
    compImgHighlight: '#E6E6E6',
    dark: '#00072D',
    headerColor: '#0E6BA877',
    highlight: '#A6E1FA',
    imageHighlight: '#0E6BA8',
    jacketColor: '#0A2472',
    secondaryText: '#7F8DAA',
    text: '#001C55'
  };

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
        <FeelingProud theme={theme} className='jumbotron-img' />
      </div>
    </header>
  );
};

export default Jumbotron;
