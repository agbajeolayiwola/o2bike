import React from 'react'
import Logo from './logo'
import './style.css'

const Navbar = () => {
    return (
        <div className='mainnav'>
            <div>
                <Logo/>
            </div>
            <div className='navlinks'>
                <div>
                    <h4>Product</h4>
                </div>
                <div>
                    <h4>Bike Type</h4>
                </div>
                <div>
                    <h4>About Us</h4>
                </div>
                <div>
                    <h4>Testimonials</h4>
                </div>
                <div>
                    <h4>Contact</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar
