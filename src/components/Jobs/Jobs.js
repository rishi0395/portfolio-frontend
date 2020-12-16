import React, { useState } from 'react';
import Title from '../Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Jobs.css';
import jobs from '../../constants/jobs';

const Jobs = () => {
  const [value, setValue] = useState(0);

  const { company, position, date, desc = [] } = jobs[value];

  return (
    <section className='section jobs'>
      <Title title='expierence' />
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.key}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.companyShortFrom}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <ReactRouterLink to='/about' className='btn center-btn'>
        more info
      </ReactRouterLink>
    </section>
  );
};

export default Jobs;
