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
            <div className='act'>
            <div className='dotsArrow'>
               <div className='sect'>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="#FFBE3B"/>
                    </svg>

                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.3" cx="5" cy="5" r="5" fill="#FFBE3B"/>
                    </svg>

                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.3" cx="5" cy="5" r="5" fill="#FFBE3B"/>
                    </svg>

                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.3" cx="5" cy="5" r="5" fill="#FFBE3B"/>
                    </svg>

                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.3" cx="5" cy="5" r="5" fill="#FFBE3B"/>
                    </svg>


                </div> 
                <div className='right'>
                    <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.73745 11.2372L22.7834 11.2372L18.1596 15.861C17.5219 16.4987 17.5219 17.4553 18.1596 18.0931C18.7974 18.7308 19.754 18.7308 20.3918 18.0931L27.726 10.7589C28.3637 10.1212 28.3637 9.16452 27.726 8.52677L20.3918 1.19258C19.754 0.554828 18.7974 0.554828 18.1596 1.19258C17.5219 1.83034 17.5219 2.78697 18.1596 3.42473L22.7834 8.04845L1.73745 8.04845C0.940251 8.04845 0.143058 8.6862 0.143058 9.64284C0.143058 10.5995 0.940251 11.2372 1.73745 11.2372Z" fill="#FFBE3B"/>
                    </svg>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom
