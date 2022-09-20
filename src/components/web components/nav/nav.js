import React from 'react'
import './nav.css';

const Nav = (props) => {
    return (
        <nav id="navBar">
            <div id="navSetOne">
                <h3><a href="/"> website.com</a></h3>

                <ul id="navUl" className='sideNavUl'>
                    <li className="navLi"><a href="./">HOME</a></li>
                    <li className="navLi"><a href="./services">SERVICES</a></li>
                    <li className="navLi"><a href="./about">ABOUT</a></li>
                    <li className="navLi"><a href="./contact">CONTACT</a></li>
                </ul>
            </div>

            <div id="navToggleBtn" onClick={(e) => {
                e.stopPropagation();
                let navToggleBtn = document.getElementById("navToggleBtn")
                let navSpan = document.getElementsByClassName("navSpan")
                let mainNavUl = document.getElementById("navUl")
                navToggleBtn.classList.toggle("nbr")
                for (let i = 0; i < navSpan.length; i++) {
                    const dash = navSpan[i];
                    dash.classList.toggle("navDash")
                }
                mainNavUl.classList.toggle("sideNavUl")
            }}>
                <span className="navSpan"></span>
                <span className="navSpan"></span>
                <span className="navSpan"></span>
            </div>

        </nav>
    )
}

export default Nav