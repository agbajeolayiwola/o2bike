import React, {useState} from 'react'
import Vector from './vector'
import './style.css'
import Bikemod from './bikemod'

const Midsect = () => {

    const cardData =[
        {
            image: <Bikemod/>,
            top:'Universal eBike Kit',
            price: 'price',
            money: '$750'
        },
        {
            image: <Bikemod/>,
            top:'Brampton eBike Kit',
            price: 'price',
            money: '$1750'
        },
        {
            image: <Bikemod/>,
            top:'Additional eBike Kit',
            price: 'price',
            money: '$750'
        },
    ]
  //current carrousel in view state
  const [current, setCurrent] =useState(0)
  const length =  cardData.length
//next slide function
    const nextSlide =()=>{
        setCurrent(current === length - 1 ? 0 : current+1)

      };

      if(!Array.isArray( cardData)||  cardData.length <= 0){
        return null
      }
    
    return (
        
        <div className='midsect'>
            <div className='vect'>
                <Vector/>
            </div>
            <div 
             className='cov'>
                

        {cardData.map((card, index)=>
        <div className={index === current ? 'slide' : 'active'}>
        {index ===current &&(
            <div 
            className={ `card card${index}`}
            key={index}>
                <div className='ebike'>
                <h2>{card.top}</h2>
                </div>
            <div className='bike'>
                {card.image}
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
)}
            </div>
        <div className='btn'>
            <div>
                <button className='nextBtn'
                onClick={nextSlide} >

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
