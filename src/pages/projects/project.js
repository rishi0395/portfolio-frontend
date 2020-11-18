import React from 'react';
import Layout from '../../components/Layout';
import Projects from '../../components/Projects';
import projects from '../../constants/project';
import './project.css';

const ProjectsPage = () => {
  return (
    <Layout>
      <section className='projects-page'>
        <Projects projects={projects} title='all projects' />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
