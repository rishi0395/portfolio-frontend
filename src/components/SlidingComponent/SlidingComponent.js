import React, { useEffect } from 'react';
import { TimelineLite } from 'gsap';
import './SlidingComponent.css';

function SlidingComponent() {
  useEffect(() => {
    const tl = new TimelineLite();
    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  }, []);

  const welcomeText = ['Creating innovation', 'For Everyday', 'people.'];
  return (
    <>
      <div class='intro'>
        <div class='intro-text'>
          {welcomeText.map((ele, index) => (
            <h1 class='hide' id={index}>
              <span class='text'>{ele}</span>
            </h1>
          ))}
        </div>
      </div>
      {/* <div class='slider'/> */}
    </>
  );
}

export default SlidingComponent;
