import React from 'react'
import './navbar.css'
import navLinks from './NavLinks';



const NavBar = ({ scrollHandler }) => {
    return (
        <nav className="navbar-container border-t lg:border-l lg:border-t-0 border-gray-200 mx-5 lg:mx-0 lg:my-5 items-center">
            <div className="top-menu-items text-center">
                <ul className="flex lg:block">
                    {navLinks}
                </ul>
            </div>
            <div className="bottom-menu-items text-center">
                <ul className="flex lg:block">
                    <li>
                        <button onClick={scrollHandler} type="button" title="Click here to scroll up" className="nav-link-size nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
