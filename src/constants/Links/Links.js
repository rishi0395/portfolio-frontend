import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Links.css';

const data = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about/'
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects/'
  },
  // {
  //   id: 4,
  //   text: 'blog',
  //   url: '/blog/'
  // },
  {
    id: 4,
    text: 'feedback',
    url: '/givefeedback/'
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact/'
  }
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <ReactRouterLink to={link.url}>{link.text}</ReactRouterLink>
    </li>
  );
});

const Links = ({ styleClass }) => {
  return <ul className={`${styleClass ? styleClass : ''}`}>{tempLinks}</ul>;
};

export default Links;
