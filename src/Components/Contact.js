import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
export default function Contact() {
    return (
      <BrowserRouter>
        <section id="contact">
        <div className='contact'>
        <div className='contact-header'>
            <div className='contact-head1'>Lets be friends</div>
            <div className='contact-head2'>Get In Touch</div>
        </div>

            <div className='contact-body'>Although I’m not currently looking for any new opportunities,
             my inbox is always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
              </div>

        <div className='contact-footer'>
            <Link className="linke" to="/"><button className='contact-button'>Say Hello</button></Link>
        </div>
        </div>
        </section>
      </BrowserRouter>
    )
  }