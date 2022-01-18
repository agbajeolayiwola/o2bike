import React from 'react'
import './style.css'
import bikes from './bikes.png'

const MdesctI = () => {
    const bikess =[
        {
        bike: bikes,
        bikesType: 'Hybrid Bikes'
        },
        {
         bike: bikes,
         bikesType: 'Fixie Bikes'
        },
        {
            bike: bikes,
            bikesType: 'Folding Bikes'
        },
        {
            bike: bikes,
            bikesType: 'Mount Bikes'
            },
        
        {
         bike: bikes,
         bikesType: 'City Bikes'
        },
    ]
    console.log(bikess)
    return (
        <div  className='midesectImain'>
            {bikess.map((bike, index)=>
            <div key={index} >
                {console.log({index})}
                <div>
                <div className='midsectIimgDiv'>
                    <img src={bike.bike} alt='o2ebike'/>
                </div>
                <div className='midsectIH4Div'>
                    <h4>{bike.bikesType}</h4>
                </div>
                </div>
            </div>
            )}
        </div>

    )
}

export default MdesctI
