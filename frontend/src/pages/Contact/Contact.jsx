import React, { useState } from 'react';
import './Contact.scss'
import { client } from '../../client';
import maillogo from '../../assets/email.png'
import mobile from '../../assets/mobile.png'
// import ValidateForm from "form-validation-react"

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    setLoading(true);
        event.preventDefault();
        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
          };
          client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='contact'>
     <div className="services-banner">
        <h1>Feel Free To Contact Us</h1>
        <div className='banner-border'></div>
      </div>

<div className="app__footer-cards">
  <div className="app__footer-card ">
    <img src={maillogo} alt="email" />
    <a href="mailto:yogeshtiwari733@gmail.com" className="p-text">yogeshtiwari733@gmail.com</a>
  </div>
  <div className="app__footer-card">
    <img src={mobile} alt="phone" />
    <a href="tel:+91 8273847842" className="p-text">+91 8273847842</a>
  </div>
</div>
{!isFormSubmitted ? ( 
<div className="app__footer-form app__flex">
  <form onSubmit={handleSubmit} style={{width:"100%"}}>
  <div className="app__flex">
    <input className="p-text" id='username' type="text" placeholder="Your Name" name="username"  value={username} onChange={handleChangeInput} required />
    </div>
    <div className="app__flex">
    <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} required onChange={handleChangeInput} />
  </div>
  <div>
    <textarea
      className="p-text"
      placeholder="Your Message"
      value={message}
      required
      name="message"
      onChange={handleChangeInput}
    />
  </div>
<div className='app__flex'><button type='submit'className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button></div>
  </form>
  {/* <button type="button" className="p-text" onClick={handleSubmit} ></button> */}
</div>
) : ( 
  <div>
    <h3 className="head-text">
      Thank you for getting in touch!
    </h3>
  </div>
)}
    </div>
  )
}

export default Contact