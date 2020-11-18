import React from 'react';
import Title from '../Title';
import Project from '../Project';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Projects.css';

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className='section projects'>
      <Title title={title} />
      <div className='section-center projects-center'>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
      {showLink && (
        <ReactRouterLink to='/projects' className='btn center-btn'>
          projects
        </ReactRouterLink>
      )}
    </section>
  );
};

export default Projects;
