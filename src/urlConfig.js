export const api =
  window.location.port === ''
    ? 'http://localhost:4000/'
    : 'http://api.rishiportfolio.tk/';

export const generatePublicUrl = (fileName) => {
  return `http://localhost:4000/public/${fileName}`;
};
