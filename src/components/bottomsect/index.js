import React from 'react'
import './style.css'
import Newvect from './newvect'
import animadata from './Riderlottie.json'
import Lottie from 'react-lottie'

const BottomSect = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animadata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className='btmSect'>

        <div className='newVect'>
            <Newvect/>
        </div>
            <div className='btmsectCard'>
            <div className='btmcard'>
                <div className='ebike'>
                </div>
            <div>
            <Lottie 
                options={defaultOptions}
                height={300}
                width={300}
            />
            </div>
            <hr/>
            <div className='price'>
                <div>
                <div><h6 className='h6p'>Price</h6></div>
                <div><h4 className='h4p'>$750</h4></div>
                </div>
                <div>
                    <button className='order'>Order</button>
                </div>
            </div>

            </div>
            </div>
            <div className='btmSectAbt'>
                <div>
                    <h2 className='h2hyb'>Hybrid Bikes</h2>
                </div>
                <div>
                    <p className='hybP'>
                    Dummy Text progressive, and affordable 
                    healthcare, accessible on mobile and 
                    online for everyone. To us, it’s not 
                    just work. We take pride in the solutions 
                    we deliver
                    </p>
                </div>
                <div className='lnMre'>
                    <h3>Learn More</h3>
                </div>
            </div>
            
        </div>
    )
}

export default BottomSect
