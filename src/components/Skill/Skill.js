import React from 'react';
import styled from 'styled-components/macro';
import './Skill.css';

export default function Skill({ title, skill }) {
  return (
    <article>
      <h3>{title}</h3>
      {skill.map((ele, index) => {
        return (
          <div className='skill' key={index}>
            <p>{ele.subTitle}</p>
            <div className='skill-container'>
              <SkillValue className='skill-value' value={ele.value} />
              <SkillText value={ele.value}>{ele.value}%</SkillText>
            </div>
          </div>
        );
      })}
    </article>
  );
}

const SkillValue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--clr-primary-5);
  height: 100%;
  width: ${({ value }) => (value ? `${value}%` : '')};
  border-radius: var(--radius);
`;

const SkillText = styled.p`
  position: absolute;
  top: -2rem;
  left: ${({ value }) => (value ? `${value}%` : '')};
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;
