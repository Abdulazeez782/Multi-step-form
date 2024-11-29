import React from 'react'
import iconThanks from '../assets/images/icon-thank-you.svg'

export const ThankYou = ({activeStep}) => {
  return (
    <article className={`thank-you ${activeStep}`}>
        <div className="main-content width">            
            <img src={iconThanks} alt='' />
            <h1 className="header">Thank you</h1>
            <p className="paragraph">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at ajadii228@gmail.com</p>
        </div>
    </article>
  )
}
