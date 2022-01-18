import React from 'react'
import LogoI from './logo'
import './style.css'

const Footer = () => {
    return (
        <div className='foot'>
            <div className='log'>
                <div className='logI'>
                    <LogoI/>
                </div>
                <div>
                    <p className='p'>
                    Trafalgar provides progressive,
                     and affordable healthcare, 
                     accessible on mobile and
                      online for everyone
                    </p>
                </div>
                <div>
                    <p>
                    ©eBike 2021. All rights reserved
                    </p>
                </div>
            </div>
            <div className='comp'>
                <div>
                    <h1>Company</h1>
                </div>
                <div>
                    <p>Product</p>
                </div>
                <div>
                    <p>Bike Type</p>
                </div>
                <div>
                    <p>Contact</p>
                </div>
                <div>
                    <p>About Us</p>
                </div>

            </div>
            <div className='help'>
                <div>
                    <h1>Help</h1>
                </div>
                <div>
                    <p>Help Center</p>
                </div>
                <div>
                    <p>Contact Support</p>
                </div>
                <div>
                    <p>Instructions</p>
                </div>
                <div>
                    <p>How It Works</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
