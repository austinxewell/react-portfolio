import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import axios from 'axios';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  var { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      email = e.target.value
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
    if(e.target.name === 'name'){
      name = e.target.value
    }
    if(e.target.name === 'message'){
      message = e.target.value
    }
  };
  
  

  const formId = 'zMe83qAe';
  const formSparkUrl = `https://submit-form.com/${formId}`

  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      ...{'name': name, 'email': email, 'message': message}
    };

    try{
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <section className='contactCard'>
      <div className='mx-2'>
        <h2>Reach me Directly At:</h2>
        <a href='mailto:austin.ewell86@gmail.com' className='emailLink'>austin.ewell86@gmail.com</a>
        <p>(801) 231-1314</p>
        <h2>- OR -</h2>
      </div>        
        <fieldset>
            <legend>
                <h2>Contact Me!</h2>
            </legend>
            <form className="contactForm" id="contact-form" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea className="messageText" name="message" rows="5" defaultValue={message} onChange={handleChange} />
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