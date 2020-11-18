export const api =
  window.location.port !== ''
    ? 'http://localhost:4000/'
    : 'https://rishi-portfolio-backend3.herokuapp.com/';

export const generatePublicUrl = (fileName) => {
  return `http://localhost:4000/public/${fileName}`;
};
