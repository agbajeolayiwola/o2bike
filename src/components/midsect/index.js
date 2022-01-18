import React from 'react'
import Vector from './vector'
import './style.css'
import bike from './bike.png'

const Midsect = () => {
    
    return (
        <div className='midsect'>
            <div className='vect'>
                <Vector/>
            </div>
            <div className='cov'>
            <div className='card'>
                <div className='ebike'>
                <h2>Universal eBike Kit</h2>
                </div>
            <div>
                <img src={bike} alt='bike product'/>
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


            <div className='card'>
                <div className='ebike'>
                <h2>Universal eBike Kit</h2>
                </div>
            <div>
                <img src={bike} alt='bike product'/>
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
        </div>
    )
}

export default Midsect
