import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <div className="services-banner">
                <h1>About Alpefix</h1>
                <div className='banner-border'></div>
            </div>
            <div className="about-content-container">
            <div className="about-content">
                <p>
                Alpefix is a global software development firm that caters to clients worldwide. We specialize in crafting innovative and effective web and software solutions, serving businesses ranging from small enterprises to large corporations. Our reputation as a web development company stems from our ability to translate user experiences into distinctive brand identities. Our dedicated team of professionals highly values your ideas and works tirelessly to turn them into profitable ventures. We offer comprehensive web development services alongside cutting-edge software development solutions, spanning across diverse sectors such as eSports, eCommerce, fitness, food ordering, stock trading, social media, and more. Our developers not only comprehend the importance of your project's timeline but also possess exceptional skills to ensure its high-quality completion within the specified timeframe.<br /></p>
            </div>

            <div className="q-btn">
               <Link to={"/contact us"}> <button>Send Queries Here</button> </Link>
            </div>

            </div>
        </div>
    )
}

export default About