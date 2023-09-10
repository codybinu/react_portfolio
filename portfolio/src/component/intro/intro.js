import React from 'react';
import './intro.css';
import bg from '../../../src/assets/bg_image_binu.png';
import btnImg from '../../../src/assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <img src={bg} alt="profile" className="bg" />
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Binayak</span><br />Aspiring Developer</span>
        <p className="introPara">I'm a budding developer specializing in JavaScript. My focus lies in crafting dynamic <br /> and user-centric web applications, constantly striving for innovation <br /> and excellence in my work.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire me button" className='btnImg'/>Hire Me</button></Link>
      </div>

    </section>
  )
}

export default Intro;