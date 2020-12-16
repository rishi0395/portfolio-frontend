import React from 'react';
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';
const services = [
  {
    id: 1,
    icon: <FaCode className='service-icon' />,
    title: 'web development',
    text: `Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services..`
  },
  {
    id: 2,
    icon: <FaSketch className='service-icon' />,
    title: 'web design',
    text: `Different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization..`
  },
  {
    id: 3,
    icon: <FaAndroid className='service-icon' />,
    title: 'app design',
    text: `iOS designers, Android designers - Work closely with user experience (UX) designers and user interface (UI) designers to apply their designs to mobile interfaces.`
  }
];

export default services;
