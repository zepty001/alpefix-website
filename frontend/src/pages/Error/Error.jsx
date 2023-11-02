import React from 'react'
import './Error.scss'
import error from '../../assets/error.jpg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-img">
        <img src={error} alt="" />
      </div>
      <div className="home-btn">
      <Link to={"/"}> <button>Back To Home</button> </Link>
      </div>
    </div>
  )
}

export default Error