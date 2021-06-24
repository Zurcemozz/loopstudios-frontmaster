import React from 'react'
import { FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import logo from '../images/logo.svg'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <div className="logo">
                        <img src={logo} alt="" srcset="" />
                    </div>
                        <ul>
                            
                            <li>About</li>
                            <li>Careers</li>
                            <li>Events</li>
                            <li>Products</li>
                            <li>Support</li>
                        </ul>
                </div>


                <div>
                    <div>
                    <ul className="icons">
                            <li><GrFacebook /></li>
                            <li><FaTwitter /></li>
                            <li><FaPinterest /></li>
                            <li><FaInstagram/></li>
                    </ul>
                    </div>
                </div>
                
                <div className='ending_logo'>
                    &copy; 2021 Loopstudios. All right reserves
                </div>
            </footer>
        </>
    )
}

export default Footer
