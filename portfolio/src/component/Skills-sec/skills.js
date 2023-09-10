import React from 'react'
import './skills.css'
import UIdesign from '../../../src/assets/ui-design.png'
import webDesign from '../../../src/assets/website-design.png'
import appDesign from '../../../src/assets/app-design.png'

const skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What i do</span>
            <span className="skillDesc">I'm a skilled JavaScript developer proficient in front-end and back-end development. I excel at creating dynamic and user-friendly web applications, leveraging JavaScript libraries and frameworks. With a knack for problem-solving and a commitment to staying updated, I strive for innovative solutions and high-quality web development.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIdesign} alt="UIdesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I have a passion for innovation and am always seeking opportunities to implement new technologies and approaches to enhance the user experience and application performance.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webDesign} alt="webDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>Web Devlopment</h2>
                        <p> I specialize in developing responsive and user-friendly web interfaces. I excel in crafting visually appealing and functional websites that meet modern design and functionality standards.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="appDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Provide you effective and user friendly applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills