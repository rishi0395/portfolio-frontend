import React, { useEffect } from 'react';
import Service from '../../components/Service';
import Jumbotron from '../../components/Jumbotron';
import Jobs from '../../components/Jobs/Jobs';
import Projects from '../../components/Projects';
import Layout from '../../components/Layout';
import projects from '../../constants/project';
import Reviews from '../../components/Reviews';
import Skills from '../../components/Skills';
import axios from '../../helper/axios';
import { STORE_FEEDBACK } from '../../redux/reducer';
import { useStateValue } from '../../redux/StateProvider';

function Home() {
  const [{ reviews }, dispatch] = useStateValue();

  useEffect(() => {
    if (reviews.length === 0) {
      axios
        .get('/api/feedbackSync')
        .then((res) => {
          dispatch({
            type: STORE_FEEDBACK,
            payload: res.data
          });
        })
        .catch((err) =>
          dispatch({
            type: STORE_FEEDBACK,
            payload: []
          })
        );
    }
  }, []);

  return (
    <Layout>
      <Jumbotron />
      <Service />
      <Jobs />
      <Skills />
      <Projects
        projects={projects.slice(0, 2)}
        title='featured projects'
        showLink
      />
      <Reviews reviews={reviews} />
    </Layout>
  );
}

export default Home;
