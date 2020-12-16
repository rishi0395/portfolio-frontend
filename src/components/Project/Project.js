import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
import './Project.css';

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className='project'>
      {image && <img src={image} className='project-img' alt='#' />}
      <div className='project-info'>
        <span className='project-number'>
          {index < 9 ? `0${index + 1}.` : `${index + 1}.`}
        </span>
        <h3>{title || 'default title'}</h3>
        <p className='project-desc'>{description}</p>
        <div className='project-stack'>
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className='project-links'>
          <a
            href=''
            rel='noopener noreferrer'
            onClick={(e) => {
              e.preventDefault();
              github && window.open(github);
            }}
          >
            <FaGithubSquare className='project-icon' />
          </a>
          <a
            href=''
            rel='noopener noreferrer'
            onClick={(e) => {
              e.preventDefault();
              url && window.open(url);
            }}
          >
            <FaShareSquare className='project-icon' />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Project;
