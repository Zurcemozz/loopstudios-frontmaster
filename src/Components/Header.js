import React, { useState } from 'react'
import logo from '../images/logo.svg'

const Header = () => {
    const [isActive, setActive] = useState(true)


    const showNav = () =>{
        setActive(!isActive)
    }
    
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" srcset="" />
                </div>

                <nav className={!isActive ? 'open' : null} onClick={showNav}>
                        <div className='nav-logo'>
                            <li><img src={logo} alt="" srcset="" />
                            </li>
                        </div>
                    <ul>
                        
                        <li><button>About</button></li>
                        <li><button>Careers</button></li>
                        <li><button>Events</button></li>
                        <li><button>Products</button></li>
                        <li><button>Support</button></li>
                    </ul>
                </nav>

                <div className={isActive ? 'menu-btn' : 'menu-btn rotate'} onClick={showNav}>
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                </div>
            </header>
        </>
    )
}

export default Header
