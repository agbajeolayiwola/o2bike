import React from 'react'
import Logo from './logo'
import './style.css'

const Navbar = () => {
    return (
        <div className='mainnav'>
            <div className='navlogo'>
                <Logo/>
            </div>
            <div className='navlinks'>
                <div>
                    <h4 className='active'>Product</h4>
                </div>
                <div>
                    <h4 className='inactive'>Bike Type</h4>
                </div>
                <div>
                    <h4 className='inactive'>About Us</h4>
                </div>
                <div>
                    <h4 className='inactive'>Testimonials</h4>
                </div>
                <div>
                    <h4 className='inactive'>Contact</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar
