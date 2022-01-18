import React from 'react'
import './style.css'
import cycler from './procycler.png'

const Bottom = () => {
    return (
        <div className='bottomBoxMain'>
            <div className='mainBox'>
                <div>
                    <h1>
                    What our customer are saying
                    </h1>
                    <hr style={{colot:'white', width:'10%'}}/>
                </div>
                <div className='bottomrInner'>
                    <div >
                        <div>
                            <img
                            className='cyclerImg'
                            src={cycler} alt='o2ebike cycer'/>
                            <div>
                                <h3
                                className='bottmH3'>Edward Newgate</h3>
                            </div>
                            <div>
                                <p className='botomP'>Pro-Cycler</p>
                            </div>
                        </div>

                    </div>
                    <div className='textP'>
                        <p className='textPp'>
                        Dummy Text patient engagement app and 
                        web portal allow you to access information 
                        instantaneously (no tedeous form, long calls, 
                        or administrative hassle) and securely”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom
