import React, { useState } from 'react';
import { FormEvent } from 'react';
import { validateEmail } from '../../utils/helpers';
import axios from 'axios';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }
  };

  const formId = 'zMe83qAe';
  const formSparkUrl = `https://submit-form.com/${formId}`

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      message: 'Test formspark submission',
    };

    try{
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <section className='contactCard'>      <div className='mx-2'>
        <h2>Reach me Directly At:</h2>
        <a href='mailto:austin.ewell86@gmail.com' className='emailLink'>austin.ewell86@gmail.com</a>
        <p>(801) 231-1314</p>
        <h2>- OR -</h2>
        <p>(For display purposes only)</p>
      </div>        
        <fieldset>
            <legend>
                <h2>Contact Me!</h2>
            </legend>
            <form className="contactForm" id="contact-form" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea className="messageText" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="errorText">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </fieldset>

    </section>
  );
}

export default Contact;