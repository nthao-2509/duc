import React from "react";
import { ContactStyled } from "../styles/Contact";
import Container from "../Container";
import TopSession from "../TopSession";

const ContactComponent = () => {
  return (
    <ContactStyled>
      <Container>
        <TopSession heading='Get In Touch' title='Contact for any query' />
        <div className='form'>
          <div className='input input__name'>
            <input type='text' placeholder='Your Name' />
          </div>
          <div className=' input input__email'>
            <input type='email' placeholder='Your Email' />
          </div>
          <div className='input input__subject'>
            <input type='text' placeholder='Your Subject' />
          </div>
          <div className='input input__subject'>
            <textarea className='textarea' rows={10} placeholder='Message' />
          </div>
          <div className='button'>
            <button>Send Message</button>
          </div>
        </div>
      </Container>
      <img src='/images/contact.png' alt='' className='bg-img' />
    </ContactStyled>
  );
};

export default ContactComponent;
