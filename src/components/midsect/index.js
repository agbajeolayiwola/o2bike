import React from 'react'
import Vector from './vector'
import './style.css'
import bike from './bike.png'

const Midsect = () => {

    const cardData =[
        {
            image: bike,
            top:'Universal eBike Kit',
            price: 'price',
            money: '$750'
        },
        {
            image: bike,
            top:'Brampton eBike Kit',
            price: 'price',
            money: '$1750'
        },
        {
            image: bike,
            top:'Additional eBike Kit',
            price: 'price',
            money: '$750'
        },
    ]
    
    return (
        <div className='midsect'>
            <div className='vect'>
                <Vector/>
            </div>
            <div className='cov'>

        {cardData.map((card, index)=>
            <div className='card'
            key={index}>
                <div className='ebike'>
                <h2>{card.top}</h2>
                </div>
            <div>
                <img src={card.image} alt='bike product'/>
            </div>
            <hr/>
            <div className='price'>
                <div>
                <div><h6 className='h6p'>{card.price}</h6></div>
                <div><h4 className='h4p'>{card.money}</h4></div>
                </div>
                <div>
                    <button className='order'>Order</button>
                </div>
            </div>

            </div>
)}
            </div>
        <div className='btn'>
            <div>
                <button className='prevBtn'>

                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9082 9.55171L4.49746 9.55171L8.32254 13.4819C8.85014 14.024 8.85014 14.8371 8.32254 15.3792C7.79494 15.9213 7.00355 15.9213 6.47595 15.3792L0.408576 9.14514C-0.119022 8.60305 -0.119022 7.78991 0.408576 7.24782L6.47595 1.01376C7.00354 0.471673 7.79494 0.471673 8.32254 1.01376C8.85014 1.55586 8.85014 2.36899 8.32254 2.91109L4.49746 6.84125L21.9082 6.84125C22.5677 6.84125 23.2272 7.38334 23.2272 8.19648C23.2272 9.00962 22.5677 9.55171 21.9082 9.55171Z" fill="#DAA53A"/>
                    </svg>
                </button>
            </div>
            <div>
                <button className='nextBtn'>

                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.09182 9.55171L19.5025 9.55171L15.6775 13.4819C15.1499 14.024 15.1499 14.8371 15.6775 15.3792C16.2051 15.9213 16.9965 15.9213 17.5241 15.3792L23.5914 9.14514C24.119 8.60305 24.119 7.78991 23.5914 7.24782L17.5241 1.01376C16.9965 0.471673 16.2051 0.471673 15.6775 1.01376C15.1499 1.55586 15.1499 2.36899 15.6775 2.91109L19.5025 6.84125L2.09182 6.84125C1.43233 6.84125 0.772832 7.38334 0.772832 8.19648C0.772832 9.00962 1.43233 9.55171 2.09182 9.55171Z" fill="#233348"/>
                    </svg>
                </button>
            </div>
        </div>
        </div>
    )
}

export default Midsect
