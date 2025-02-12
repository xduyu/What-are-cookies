import { useState } from 'react'
import './css/hero.css'
import { flushSync } from 'react-dom'

function Hero() {
  return (
    <>
        <div className="desc" style={{display: 'flex', gap: '300px', margin: '0 auto', maxWidth: '1400px', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
            <div className="main" style={{textAlign: 'left'}}>
            <h1>What are cookies? | Cookies definition</h1>
            <p style={{maxWidth: '600px'}}>Cookies are small files of information that a web server generates and sends to a web browser. Web browsers store the cookies they receive for a predetermined period of time, or for the length of a user's session on a website. They attach the relevant cookies to any future requests the user makes of the web server.

Cookies help inform websites about the user, enabling the websites to personalize the user experience. For example, ecommerce websites use cookies to know what merchandise users have placed in their shopping carts. In addition, some cookies are necessary for security purposes, such as authentication cookies (see below).

The cookies that are used on the Internet are also called "HTTP cookies." Like much of the web, cookies are sent using the HTTP protocol.</p>
            </div>
            <img style={{paddingTop: '90px', height: '500px'}} src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="" />
        </div>
    </>
  )
}

export default Hero