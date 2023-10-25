import './MyNav.css';
import React from 'react';

function MyNav() {
    const path = window.location.pathname
    return (
        <navbar>
            <div class="navbar">
                <div class="logo"><a href='/'>GrabME</a></div>
                <ul className='ul-text'>
                    <li><a href="/" className={path == "/" ? 'active-nav' : ''}>Requests </a></li>
                    <li><a href="accept" className={path == "/accept" ? 'active-nav' : ''}>Accepted</a></li>
                    <li><a href="order" className={path == "/order" ? 'active-nav' : ''}>Post</a></li>
                </ul>
            </div>
        </navbar>
    );
}
export default MyNav;