import React from 'react'
import './works.css'
import portfolio1 from '../../../src/assets/portfolio-1.png'
import portfolio2 from '../../../src/assets/portfolio-2.png'
import portfolio3 from '../../../src/assets/portfolio-3.png'
import portfolio4 from '../../../src/assets/portfolio-4.png'
import portfolio5 from '../../../src/assets/portfolio-5.png'
import portfolio6 from '../../../src/assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">lorem ipsum dolor sit amet consectetur adipiscing elit mus ultricies proin dictumst venenatis malesuada interdum vel congue tristique feugiat integer efficitur massa dictum nam maecenas cras molestie dui hac ornare fermentum magnis aliquam dis mollis quisque lacus risus orci cubilia class sagittis bibendum euismod taciti leo rhoncus nisl curabitur laoreet</span>
        <div className="worksImgs">
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />
            <img src={portfolio4} alt="" className="worksImg" />
            <img src={portfolio5} alt="" className="worksImg" />
            <img src={portfolio6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See more</button>
    </section>
  )
}

export default Works