import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import './feedback.css';
import FeedbackComp from '../../components/Feedback';
import Popup from '../../components/Popup';
import Form from '../../components/Form/Form';
import axios from '../../helper/axios';
import Pusher from 'pusher-js';
import { useStateValue } from '../../redux/StateProvider';
import { STORE_FEEDBACK, UPDATE_FEEDBACK } from '../../redux/reducer';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [{ reviews }, dispatch] = useStateValue();

  useEffect(() => {
    if (reviews.length === 0) {
      axios.get('/feedbackSync').then((res) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch({
          type: STORE_FEEDBACK,
          payload: res.data
        });
      });
    }
  }, []);

  useEffect(() => {
    var pusher = new Pusher('f17a1fedf49189fcfad3', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('feedbackcontent');
    channel.bind('inserted', function (newFeedback) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dispatch({
        type: UPDATE_FEEDBACK,
        payload: newFeedback
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [reviews]);

  const formElements = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'name',
      className: '',
      onChange: ({ target }) => setName(target.value),
      value: name
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'email',
      onChange: ({ target }) => setEmail(target.value),
      value: email,
      className: 'form-email'
    },
    {
      displayFLex: true,
      elements: [
        {
          type: 'text',
          name: 'company',
          placeholder: 'company',
          className: '',
          onChange: ({ target }) => setCompany(target.value),
          value: company
        },
        {
          type: 'text',
          name: 'designation',
          placeholder: 'designation',
          className: '',
          onChange: ({ target }) => setDesignation(target.value),
          value: designation
        }
      ]
    }
  ];

  const formText = {
    onChange: function ({ target }) {
      setMessage(target.value);
    },
    placeholder: 'feedback',
    name: 'feedback',
    value: message
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/feedbackSubmit', {
        message,
        name,
        designation,
        email,
        company
      })
      .then((res) => {
        if (res.data.transactionSuccess) {
          setSubmitted(true);
          resetForm();
        }
      })
      .catch((err) => console.log(err));
  };

  const resetForm = () => {
    setCompany('');
    setDesignation('');
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <>
      <Layout className='feedback-layout'>
        <FeedbackComp
          onClick={() => setVisible((visible) => !visible)}
          reviews={reviews}
        />
        <Popup visible={visible}>
          <Form
            mailSent={submitted}
            onSubmit={(e) => onSubmit(e)}
            formElements={formElements}
            title='please provide feedback'
            formText={formText}
          />
        </Popup>
      </Layout>
    </>
  );
};

export default Feedback;
