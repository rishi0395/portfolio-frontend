import React from 'react';
import './Form.css';

function Form({
  title,
  formElements,
  onSubmit,
  formText,
  children,
  mailSent,
  buttonDisabled,
  ...props
}) {
  return (
    <article className='contact-form'>
      <h3>{title}</h3>
      {children}
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          {formElements.map((ele) => {
            if (ele.displayFLex) {
              return (
                <div style={{ display: 'flex' }}>
                  {ele.elements.map((item) => (
                    <input
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      className={`form-control form-grid-company ${item.className}`}
                      onChange={item.onChange}
                      value={item.value}
                    />
                  ))}
                </div>
              );
            } else {
              return (
                <input
                  type={ele.type}
                  name={ele.name}
                  placeholder={ele.placeholder}
                  className={`form-control ${ele.className}`}
                  onChange={ele.onChange}
                  value={ele.value}
                />
              );
            }
          })}
          <textarea
            name={formText.name}
            rows='5'
            placeholder={formText.placeholder}
            className='form-control form-message'
            onChange={formText.onChange}
            value={formText.value}
          />
        </div>
        <button
          type='submit'
          className='submit-btn btn'
          disabled={buttonDisabled}
        >
          {mailSent ? 'Submitted' : 'Submit here'}
        </button>
      </form>
    </article>
  );
}

export default Form;
