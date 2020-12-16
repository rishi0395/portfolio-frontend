import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background: var(--clr-grey-10);
  display: ${({ reviews }) => (reviews.length === 0 ? 'none' : 'hide')};

  .section {
    padding: 5rem 0;
    position: relative;
  }

  .section-center {
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    .img {
      width: 20%;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
    }
    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
    }
    .text {
      max-width: 45em;
      margin: 0 auto;
      line-height: 1;
      font-size: 2rem;
      color: var(--clr-grey-5);
    }
    .icon {
      font-size: 2rem;
      margin-top: 1rem;
      color: var(--clr-primary-5);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }
    article.lastSlide {
      transform: translateX(-100%);
    }
    article.nextSlide {
      transform: translateX(100%);
    }
  }

  @media only screen and (max-width: 600px) {
    .section-center .img {
      width: 35%;
    }

    .section-center .title {
      margin-bottom: 1.5rem;
    }
    .section-center .text {
      overflow-y: scroll;
      max-height: 9rem;
      font-size: medium;
      max-width: 15rem;
      /* border: 0.5px solid var(--clr-grey-5); */
      border-radius: 1rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      background: var(--clr-grey-9);
      line-height: initial;
    }
    .center-btn {
      margin-top: auto;
    }
    .icon {
      margin-top: 1rem !important;
    }
  }
`;
