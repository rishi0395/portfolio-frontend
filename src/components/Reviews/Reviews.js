import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Title from '../Title';
import { Wrapper } from './ReviewsStyles';
// import reviews from '../../constants/reviews';
import { Link as ReactRouterLink } from 'react-router-dom';
import Review from '../../assets/reviews.png';

const Slider = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  return (
    <Wrapper className='section' reviews={reviews}>
      <Title title='feedbacks' />
      <div className='section-center'>
        {reviews &&
          reviews.map((review, reviewIndex) => {
            const { name, designation, message } = review;

            let position = 'nextSlide';
            if (reviewIndex === index) {
              position = 'activeSlide';
            }
            if (
              reviewIndex === index - 1 ||
              (index === 0 && reviewIndex === reviews.length - 1)
            ) {
              position = 'lastSlide';
            }
            if (reviews.length === 1) {
              position = 'activeSlide';
            }
            return (
              <article className={position} key={reviewIndex}>
                <img src={Review} className='img' alt='#'></img>
                <h4>{name}</h4>
                <p className='title'>{designation}</p>
                <div>
                  <p className='text'>{message}</p>
                </div>
                <FaQuoteRight className='icon' />
              </article>
            );
          })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>

      <ReactRouterLink to='/givefeedback' className='btn center-btn'>
        give feedback
      </ReactRouterLink>
    </Wrapper>
  );
};

export default Slider;
