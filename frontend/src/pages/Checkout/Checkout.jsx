import React from 'react'
import './Checkout.scss';
import broken from '../../assets/brokenimage.png'
import loading from '../../assets/loading.png'
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="checkout">
        <div className="checkout-navbar">
            <Link><div className="navbar-comp">
                <img src={broken} alt="broken" /> 
                <p>Deals Checkout</p>
                </div>
                </Link>
        </div>
        <div className="checkout-navbar-list">
            <div className="list-items">
            <ul>
                <li>Popular</li>
                <li>Hot Deals</li>
                <li>Deals of the day</li>
                <li>Advertiser Disclosure</li>
            </ul>
            </div>
        </div> 
        <div className="checkout-details">
            <div className="checkout-mail">
                <div className="heading">
                    <h3>Please Enter Your Email To Proceed</h3></div>
                <div className="checkout-form">
                 <form>
                <input type='email' placeholder='Enter Email' required/>
                <button>Continue</button>
                </form>
                <div className="concent"><p>By joining. I agree to the terms & condition and privacy policy. *Bonus terms apply</p></div>
                </div>
            </div>

            <div className="chase-info">
                <div className="chase-heading"><p>Chase </p><img src={broken} alt="" /></div>
                <div className="bonus">$200 Bonus on all accounts</div>
                <div className="terms">*terms and conditionmay apply</div>
            </div>
        </div>

        <div className="footer-checkout">
            <div className="footer-checkout-items">
                <div className='copyright'>Checkout 2023. All Rights Reserved</div>
                <div className="footer-items">
                    <ul>
                        <li>Privacy</li>
                        <li>Terms Of Use</li>
                        <li>Advertiser Disclosure</li>
                    </ul>
                </div>
            </div>
            <p className='footer-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, iure ducimus. Vel, hic obcaecati laborum architecto consectetur odit, aperiam eum inventore ducimus aliquam voluptas voluptates vitae voluptatibus reprehenderit vero, dolorem atque! In, reprehenderit cum dolore animi veritatis esse voluptatum odio!</p>
            </div> 
    </div> 
  )
}

export default Checkout