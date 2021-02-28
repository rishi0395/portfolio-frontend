import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Layout from '../../components/Layout';
import axios from '../../helper/axios';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mailSent, setMailSent] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (name === '' || email === '' || message === '') {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [name, email, message]);

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
      className: '',
      onChange: ({ target }) => setEmail(target.value),
      value: email
    }
  ];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('/mailsend', {
        name,
        email,
        message
      })
      .then((res) => {
        if (res.data.transactionSuccess) {
          resetForm();
          setMailSent(true);
        }
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setButtonDisabled(true);
  };

  const formText = {
    onChange: ({ target }) => setMessage(target.value),
    placeholder: 'feedback',
    name: 'feedback',
    value: message
  };

  return (
    <Layout>
      <section className='contact-page'>
        <Form
          formElements={formElements}
          title='get in touch'
          formText={formText}
          onSubmit={(e) => onSubmitHandler(e)}
          mailSent={mailSent}
          buttonDisabled={buttonDisabled}
        >
          <div className='contact-info'>
            <p>
              Are you interested in working with me or just have a question?
            </p>
            e-mail me at &nbsp;
            <a href='mailto:guptarishi013@gmail.com' className='contact-email'>
              guptarishi013@gmail.com
            </a>
          </div>

          <h3>OR</h3>
        </Form>
      </section>
    </Layout>
  );
};

export default Contact;
