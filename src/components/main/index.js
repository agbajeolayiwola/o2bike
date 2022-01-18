import React from 'react'
import Logo from '../Navbar/logo'
import Grpsvg from './grpsvg'
import './style.css'

const Main = () => {
    return (
        <div className='mainMain'>
            <div className='grpsvg'>
                <Grpsvg/>
            </div>
            <div className='mainleft'>
                <div>
                    <h1 className='mainh1'>
                        Your Bike Electric Update
                    </h1>
                </div>
                <div>
                    <p className='mainP'>
                    Dummy text progressive, and affordable 
                    healthcare, accessible on mobile and online 
                    for everyone
                    </p>
                </div>
                <div>
                    <div className='inpDiv'>
                    <input placeholder='Search Bike or Anything' type='text'/>
                    <button>Find</button>
                    </div>
                </div>
            </div>
            {/* animated svg div */}
            <div>
                <Logo/>
            </div>
        </div>
    )
}

export default Main
