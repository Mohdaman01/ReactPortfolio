import React,{ useState } from 'react';

import {images} from '../../constants';


import './Footer.scss';

const Footer = () => {

    // const [formData, setformData] = useState({name: '', email:'', message:''})

    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // const [loading, setloading] = useState(false);

    // const { name, email, message} = formData;

    // const handleChangeInput = (e)=>{
    //   const {name,value} = e.target;

    //   setformData({ ...formData, [name]: value })
    // };

    // const handleSubmit = ()=>{
    //   setloading(true);
    // };

  return (
    <>
    <h2 className='head-text'>Take a coffe & chat with me</h2>

    <div className='app__footer-cards'>
      
      <div className='app__footer-card' >
      <img src={images.email} alt="email"/>
      <a href="mailto:mohdastar200026@gmail.com" className='p-text'>mohdastar200026@gmail.com</a>
      </div>
      <div className='app__footer-card' >
      <img src={images.mobile} alt="mobile"/>
      <a href="tel: +91 9814513378" className='p-text'>9814513378</a>
      </div>
    </div>
{/* 
    <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input className='p-text' type="text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} />
      </div>
      <div className='app__flex'>
        <input className='p-text' type="email" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} />
      </div>

      <div>
        <textarea className='p-text' placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} ></textarea>
      </div>
      <button type='button' className='p-text button' onClick={handleSubmit}>{loading ? 'Sending':'Sent Message'}</button>
    </div> */}
    </>
  )
}

export default Footer