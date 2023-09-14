import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../../src/assets/walmart.png'
import microsoft from '../../../src/assets/microsoft.png'
import facebook from '../../../src/assets/facebook.png'
import adobe from '../../../src/assets/adobe.png'
import facebookIcon from '../../../src/assets/facebook-icon.png'
import twitterIcon from '../../../src/assets/twitter.png'
import youtubeIcon from '../../../src/assets/youtube.png'
import instagramIcon from '../../../src/assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        console.log('inside function');
        e.preventDefault();

        emailjs.sendForm('service_mum0u9s', 'template_49rm9jf', form.current, '55q7QMmgtvxJyIM4z')
            .then((result) => {
                console.log(result.text);
                // e.target.reset();
                alert('Email sent');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <sction id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    lorem ipsum dolor sit amet consectetur adipiscing elit mus ultricies proin dictumst venenatis malesuada interdum vel congue tristique feugiat integer efficitur massa dictum nam maecenas cras molestie dui hac ornare fermentum magnis aliquam dis mollis quisque lacus risus orci cubilia class sagittis bibendum euismod taciti leo rhoncus nisl curabitur laoreet
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={microsoft} alt="microsoft" className="clientImg" />
                    <img src={facebook} alt="facebook" className="clientImg" />
                    <img src={adobe} alt="adobe" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    I am always open to new opportunities, so feel free to reach out if you have any questions or just want to say hi! I look forward
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='from_email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value='send' className="submitBtn"> Submit </button>
                    <div className="links">
                        <img src={facebookIcon} alt="facebookIcon" className="link" />
                        <img src={twitterIcon} alt="twitterIcon" className="link" />
                        <img src={youtubeIcon} alt="youtubeIcon" className="link" />
                        <img src={instagramIcon} alt="instagramIcon" className="link" />
                    </div>
                </form>
            </div>
        </sction>
    )
}

export default Contact