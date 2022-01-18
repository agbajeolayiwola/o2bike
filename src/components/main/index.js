import React from 'react'
import Grpsvg from './grpsvg'
import './style.css'
import Lottie from 'react-lottie'
import animdata from './Headerlottie.json'

const Main = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animdata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
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
                    <button className='find'>Find</button>
                    </div>
                </div>
            </div>
            {/* animated svg div */}
            <div>
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
            </div>
        </div>
    )
}

export default Main
