import React from 'react';
import './Feedback.css';
import srcImg from '../../assets/reviews.png';
import Title from '../Title';

function Feedback({ onClick, reviews }) {
  return (
    <section class='section-stories feedback-layout'>
      <Title title={`received feedback's`} />

      <div className='feedback-container'>
        {reviews &&
          reviews.map((item, index) => {
            const { name, designation, company, message } = item;
            return (
              <div class='row' id={index}>
                <div class='story'>
                  <figure class='story__shape'>
                    <img
                      src={srcImg}
                      alt='Person on a tour'
                      class='story__img'
                    />
                    <figcaption class='story__caption'>{name}</figcaption>
                  </figure>
                  <div class='story__text'>
                    <h3 class='heading-tertiary u-margin-bottom-small'>
                      {name},{' '}
                      {company ? `${designation}, ${company}` : { designation }}
                    </h3>
                    <p>{message}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <a href='/' className='btn center-btn' onClick={onClick}>
        give feedback
      </a>
    </section>
  );
}

export default Feedback;
