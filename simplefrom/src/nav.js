//import logo from './logo.svg';
import React from 'react';
import './nav.css';

function Nav() {
    return (

        <div className='nav'>
            <nav className="navMenu">
                <a href="https://freefrontend.com/css-sidebar-menus/" className='home'>Home</a>
                <a href="https://codepen.io/yuhomyan/pen/ExKvNVa" className='blog'>Blog</a>
                <a href="https://freefrontend.com/css-sidebar-menus/" className='work'>Work</a>
                <a href="https://codepen.io/yuhomyan/pen/ExKvNVa" className='about'>About</a>
                <div className="dot"></div>
            </nav>
        </div>
    );
}

export default Nav;
