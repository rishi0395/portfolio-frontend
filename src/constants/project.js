import Amazon from '../assets/amazon.png';
import Netflix from '../assets/netflix.png';
import VisitYourDream from '../assets/VisitYourDream.png';
import WeatherApp from '../assets/weather.png';
import Slack from '../assets/slack.png';
import Whatsapp from '../assets/whatsapp.png';
import Spotify from '../assets/spotify.png';
import Airbnb from '../assets/airbnb.png';
import Flipkart from '../assets/flipkart.png';
import Portfolio from '../assets/portfolio.png';
const projects = [
  {
    id: 1,
    description: `An e-commerce app where users can log in, sign up. View the list of products, add the products, and even make the payments.
    Google firebase has been used for authentication.
    ReactJS has been used to built UI and react-router-dom to navigate between pages. 
    Also used React hooks API createContext, useContext, useReducer to store and pass the data to its children components.
    For payments, Stripe, an external JS library, has been used to allow the user to pay. The payment is safe and secure.
      `,
    title: ' e-commerce app ~ Amazon clone',
    github: 'https://github.com/rishi0395/amazon-clone',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: 'react-router' },
      { id: 3, title: 'stripe' },
      { id: 4, title: 'react-hooks-api' }
    ],
    url: 'https://clone-aac45.web.app/',
    image: Amazon,
    index: 0
  },
  {
    id: 2,
    description: `A movie app is very similar to the Netflix website. Where users can see the very first home screen and have an option to log in or sign up. After login, the user will navigate to the user profile selection page. Once selected, the user will land into the browse page, list all the movies, and that too is categorized into various genres.
    ReactJS has been used to build an app, firestore for data storage, and firebase for authentication has been used. The compound component has been used to create all the features.
    An app is mobile responsive, will automatically adjust the HTML and CSS based on the mobile screen size.
    Used React hooks API createContext, useContext, useReducer to store and pass the data to its children components.
    No external library is used to build the UI; only CSS and HTML are used to design and build the user interface.
    Jest Enzyme has been used to write unit test cases.`,
    title: 'Movies Mania ~ netflix clone',
    github: 'https://github.com/rishi0395/netflix-clone',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: 'react-router' },
      { id: 3, title: 'firebase' },
      { id: 5, title: 'firestore' },
      { id: 6, title: 'jest-enzyme' }
    ],
    url: '',
    image: Netflix,
    index: 1
  },
  {
    id: 3,
    description: `An app where users can plan a vacation, it's highly mobile responsive. It's a beautiful app built using advanced CSS, node-sass, HTML, and JS.`,
    title: 'Travelling app ~ Visit Your Dream',
    github: 'https://github.com/rishi0395/travelling-app',
    stack: [
      { id: 1, title: 'CSS' },
      { id: 2, title: 'HTML' },
      { id: 2, title: 'node-sass' },
      { id: 2, title: 'javascript' }
    ],
    url: '',
    image: VisitYourDream,
    index: 2
  },
  {
    id: 3,
    description: `It's a complete NodeJS application to get weather information based on the location. I have used Mapbox API to fetch the location information and OpenWeatherMap API to get the weather information based on the location.`,
    title: 'Weather app',
    github: 'https://github.com/rishi0395/node-weather-website',
    stack: [
      { id: 1, title: 'nodejs' },
      { id: 2, title: 'Mapbox' },
      { id: 3, title: 'OpenWeatherMap' }
    ],
    url: '',
    image: WeatherApp,
    index: 3
  },
  {
    id: 4,
    description: `An app is used to chat with multiple people simultaneously, where users can create a group, and anyone can join the group and share their messages. For the authentication used, google firebase and firestore are used to store the data—used react-router-dom to navigate between different chat groups.
    Used React hooks API createContext, useContext, useReducer to store and pass the data to its children components.
    No external library is used to build the UI; only CSS and HTML are used to design and develop the user interface.`,
    title: 'Group Chat App ~ slack clone ',
    github: 'https://github.com/rishi0395/slack-clone',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: 'react-router' },
      { id: 3, title: 'firebase' },
      { id: 4, title: 'react-hooks-api' }
    ],
    url: '',
    image: Slack,
    index: 4
  },
  {
    id: 5,
    description: `It’s a full-stack MERN (Mongoose, Express, ReactJS, NodeJS) project. Users can chat, create a profile, and chat with one smoothly; chats are stored in a MongoDB database. Used Pusher (Bi-directional hosted APIs), an external JS library to allow the user to use live (real-time) server rendering. 
    For the UI, I used ReactJS and MaterialUI for the icons. Axios has been used to call and interact with the backend. No external library is used to build the UI; only CSS and HTML are used to design and develop the user interface.
    For server and database, Express has been used to create a server, and MongoDB (no SQL) is implemented to store the data. To interact with DB used mongoose, an external JS library.
    For authentication and deployment, Google firebase has been used.
    `,
    title: 'One to One Chat Bot ~ Whatsapp clone',
    github: 'https://github.com/rishi0395/whatsapp-clone',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: 'express' },
      { id: 3, title: 'nodejs' },
      { id: 5, title: 'mongoose' }
    ],
    url: '',
    image: Whatsapp,
    index: 5
  },
  {
    id: 6,
    description: `It's a  music app where users can log in with their Spotify account and enjoy their favorite playlist. An app builds in pure ReactJS and used spotify-web-api-js Javascript library to fetch all the music playlists, and the same is used while rendering in the user's interface. Used React hooks API createContext, useContext, useReducer to store and pass the data to its children components.
    Axios has been used to call and interact with the server. No external library is used to build the UI; only CSS and HTML are used to design and build the user interface.
    `,
    title: 'Music App ~ Spotify clone',
    github: 'https://github.com/rishi0395/spotify',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: ' CSS, HTML' },
      { id: 3, title: 'nodejs' },
      { id: 5, title: 'spotify-web-api' }
    ],
    url: '',
    image: Spotify,
    index: 6
  },
  {
    id: 7,
    description: `It's a pure ReactJS app with advanced CSS that has been used to build the buttons cards and jumbotron. react-router-dom, a JS library, has been used to navigate between different pages.
    `,
    title: 'Travel booking app ~ airbnb clone',
    github: 'https://github.com/rishi0395/airbnb-clone',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: ' CSS ' },
      { id: 3, title: 'HTML' }
    ],
    url: '',
    image: Airbnb,
    index: 7
  },
  {
    id: 8,
    description: `It's an e-commerce website with two different sections, the end-user section, where a user can visit, signup, login, and place and purchase the orders. User previous orders will be stored in the database, and placed/purchased order details will be shown on the orders page.
    Another one is for admin, where admin can create and login into account and add, update, and delete actions on pages and products into various categories. Moreover, the admin can view the list of placed orders by a user and update their status. The updated order status will be reflected in the user's order summary.
    It's a full-stack MERN project, used JSON web token for maintaining a user session. Used Redux as global store management, redux-router for routing various pages. Axios for fetching data from the server, Express for creating a server, mongoose for interacting with MongoDB database. Bcrypt is used for encoding the user password.
    `,
    title: 'Ecommerce website ~ flipkart clone',
    github: 'https://github.com/rishi0395/ecommerce',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: ' CSS ' },
      { id: 3, title: 'HTML' },
      { id: 4, title: 'Mongoose' },
      { id: 4, title: 'Express' },
      { id: 4, title: 'JSON Web Token' }
    ],
    url: '',
    image: Flipkart,
    index: 8
  },
  {
    id: 9,
    description: `It's a full-stack MERN project. People can visit a website, view my past works, give feedback, and even send mail to me. Nodemailer and Pusher external JS library has been used to integrate mail options and real-time feedback rendering. 
    Used React hooks API createContext, useContext, useReducer to store and pass the data to its children components.
    No external library is used to build the UI; only CSS and HTML are used to design and develop the user interface.
    `,
    title: 'Portfolio ~ Showcase yourself',
    github: 'https://github.com/rishi0395/portfolio-frontend',
    stack: [
      { id: 1, title: 'react' },
      { id: 2, title: ' CSS ' },
      { id: 3, title: 'HTML' },
      { id: 4, title: 'Pusher' },
      { id: 5, title: 'Nodemailer' }
    ],
    url: '',
    image: Portfolio,
    index: 9
  }
];

export default projects;
