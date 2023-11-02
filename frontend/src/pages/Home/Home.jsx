import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import './Home.scss'
import walkingMan from '../../assets/walking-man.gif'
import wdlogo from '../../assets/wdlogo.png'
import marketinglogo from '../../assets/ux.png'
import adlogo from '../../assets/adlogo.png'
import custom from '../../assets/custom.png'
import proven from '../../assets/proven.png'
import price from '../../assets/price.png'
import services from '../../assets/services.png'

import { Link } from 'react-router-dom'

// import Typewriter from 'typewriter-effect'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"] | order(_createdAt desc)';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <div className="home">
      <div className="home-banner-container">
        <div className="home-banner"></div>
        <div className="banner-heading">
          <p>Fuel Your Brand</p>
          <div className='typewriter'>
            {/* <Typewriter className="abc"
          options={{
            strings: ['Developing your business website?', 'Marketing your business?', 'Earning through ad revenue?'],
            autoStart: true,
            loop: true,
          }}
        /> */}
            We possess creativity, comprehend branding, <br /> adapt to technological advancements,<br />
            and achieve successful outcomes.<br />
            
          </div>
        </div>
        <img src={walkingMan} alt="walking man" className='walking-man' />
      </div>
      <div className="home-services">
        <div className="services-heading"><h2>What We Do</h2>
        <p>We Believe in Building Strong Brands and Integrated Strategies.</p>
        </div>
        <div className="products-container">
          <article className="product-card">
            <Link to={'/'} className='blog_button'>
              <div className="service-img"><img src={marketinglogo} alt='logo' className='product-image' /></div>
              <p className="product-name"> Visual Design & Branding</p>
              <p className='product-details'>Cohesive brands & user experiences that reflect the quality of your offerings, increase conversions, & turn prospects into customers.</p>
            </Link>
          </article>
          <article className="product-card">
            <Link to={'/'} className='blog_button'>
              <div className="service-img"><img src={wdlogo} alt='logo' className='product-image' /></div>
              <p className="product-name"> Website Design & Development</p>
              <p className='product-details'> Websites to support sales, drive leads, sell online, automate back office functions, increase visibility, & communicate the quality of your offerings.</p>
            </Link>
          </article>
          <article className="product-card">
            <Link to={'/'} className='blog_button'>
              <div className="service-img"><img src={adlogo} alt='logo' className='product-image' /></div>
              <p className="product-name"> SEO & Digital Marketing</p>
              <p className='product-details'>Inbound & outbound marketing to attract, engage & nurture niche audiences over complex buying cycles, increasing lead quality & quantity.</p>
            </Link>
          </article>
        </div>
        <br />
      </div>
      <div>
      </div>
      <div style={{ backgroundColor: "#edf2f8" }}>
        <div className='testimonial-heading'><h3>Words from our clients</h3></div>
        <>
          {testimonials.length && (
            <>
              <div className="app__testimonial-item app__flex">
                <img src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex].name} />
                <div className="app__testimonial-content">
                  <p>{testimonials[currentIndex].feedback}</p>
                  <div className='name'>
                    <h4>{testimonials[currentIndex].name}</h4>
                    <h5>{testimonials[currentIndex].company}</h5>
                  </div>
                </div>
              </div>

              <div className="app__testimonial-btns app__flex">
                <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                  <HiChevronLeft />
                </div>

                <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                  <HiChevronRight />
                </div>
              </div>
            </>
          )}
        </>
      </div>
      <div className="why-us">
        <div className="why-us-heading">
        <h3>Why Choose Us?</h3>
        <p>4 Things That Make Us the Best Web Development Agency.</p>
        </div>
        <div className="choose-container">
          <div className="choose-item">
          <img src={proven} alt="proven" />
          <p>Proven Track Record</p>
          </div>
          <div className="choose-item">
          <img src={custom} alt="custom" />
          <p>Customized Solution</p>
          </div>
          <div className="choose-item">
          <img src={price} alt="price" />
          <p>Affordable Pricing</p>
          </div>
          <div className="choose-item">
          <img src={services} alt="services" />
          <p>Comprehensive Services</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home