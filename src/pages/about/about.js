import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { nodes } from '../../constants/about';
import './about.css';
import Image from './ManOnTable';

const About = () => {
  const { info, stack, title, image, moreInfo, otherInfo } = nodes;

  return (
    <Layout>
      <div title='About Me' description='about webdev' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image />
          <article className='about-text'>
            <Title title={title} />
            <h3 className='about-info'>{info}</h3>

            <div className='about-stack'>
              {stack?.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
            <p className='about-moreinfo'>{moreInfo}</p>
            <p>{otherInfo}</p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
