import React from 'react';
import { skillValues } from '../../constants/skills';
import Skill from '../Skill';
import Title from '../Title';
import './Skills.css';

function Skills() {
  return (
    <section className='section skills'>
      <Title title='skills' />
      <div className='section-center skills-center'>
        {skillValues.map((ele, index) => (
          <Skill title={ele.title} skill={ele.skill} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
