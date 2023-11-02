import React from 'react'
import './Services.scss'
import web from '../../assets/web-dev.jpg'
import ad from '../../assets/ad.jpg'
import marketing from '../../assets/marketing.jpg'

const Services = () => {
  return (
    <div className="services">
      <div className="services-banner">
        <h1>Here's What We Excel At</h1>
        <div className='banner-border'></div>
      </div>
      <div className="services-container">
        <div className="services-item">
          <div className="services-image"><img src={web} alt="web" /></div>
          <div className="services-text">
            <h2>Website Design & Development</h2>
            <p> <br />
              Have you been operating a business for an extended period but have yet to explore the online realm? Are you eager to propel your business to the next level of success? Whether you wish to develop a website from the ground up or rejuvenate your existing one, we can assist you in achieving your goals.
              <br />
              <br />
              No matter the specific field or industry in which you intend to create a website, Solter Vision's proficient web developers and designers can provide web solutions that surpass your expectations in terms of both performance and user-friendliness.
              <br />
              We recognize the significance of having a compelling website in the current digital age. Therefore, we ensure the integration of all essential digital marketing elements, including SEO, PPC, content marketing, and more, to generate exceptional results.</p>

          </div>
        </div>
        <div className="services-item1">
          <div className="services-text">
            <h2>Visual Design & Branding</h2>
            <p> <br />
              Elevate your website's chances of success by implementing a brand strategy that provides insights into your identity and effective ways to convey it meaningfully.
              <br />
              <br />
              Branding encompasses all the actions your business takes to establish its identity and set your products apart, making them distinct from others in the market.
              <br />
              Let's delve into effective website branding strategies and identify the most optimal approaches for effectively conveying your brand message.</p>
          </div>
          <div className="services-image"><img src={marketing} alt="marketing" /></div>
        </div>
        <div className="services-item">
          <div className="services-image"><img src={ad} alt="ad revenue" /></div>
          <div className="services-text">
            <h2>SEO & Digital Marketing</h2>
            <p><br />
            A digital marketing strategy entails evaluating attainable objectives achievable through online platforms. In a time when a substantial number of consumers conduct business through mobile devices, the effective execution of a digital marketing strategy can be pivotal for an organization's success. <br />
              <br />

              A digital marketing platform is a tool that aids in various online marketing activities. Gartner emphasizes that for a solution to be considered a digital marketing platform, it shouldn't attempt to cover all aspects of digital marketing but instead focus on functionalities such as media purchasing, performance assessment and enhancement, and brand monitoring. It may not encompass other marketing approaches.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services