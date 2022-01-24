import React, {useState, useEffect} from 'react'
import Logo from './logo'
import './style.css'
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const Navbar = () => {

    const [size, setSize] = useState(window.innerWidth);
    const breakpoint = 670;
   useEffect(() => {
     const handleResize=()=>{
     setSize(window.innerWidth)
     return () =>{
       window.removeEventListener('resize', handleResize);
     }
   }
   window.addEventListener('resize', handleResize)
 },[])
 console.log(size)



    const [showNav, setShowNav] = useState();

    const navItems = [
        <div>
        <h4 className='active'>Product</h4>
        </div>,
        <div>
            <h4 className='inactive'>Bike Type</h4>
        </div>,
        <div>
            <h4 className='inactive'>About Us</h4>
        </div>,
        <div>
            <h4 className='inactive'>Testimonials</h4>
        </div>,
        <div>
            <h4 className='inactive'>Contact</h4>
        </div>,
    ];
   
    const title = <div className='navlogo'><Logo/></div>;
    return (
        <div>
        {breakpoint <= size ? 
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
        :
                <div className='mainnav'>
                <div className='navlogo'>
                    <Logo/>
                </div>
                <div className='navBg'>
                <MenuIcon onClick={() => setShowNav(true)} />
                <SideNav showNav={showNav} 
                titleStyle={{ backgroundColor: '#fff' }}
                itemStyle={{ backgroundColor: '#fff' }}
                itemHoverStyle={{ backgroundColor: '#FFBD37' }}
                onHideNav={() => setShowNav(false)} title={title} items={navItems} />
                </div>
                </div>
           

        }
        </div>
    )
}

export default Navbar
