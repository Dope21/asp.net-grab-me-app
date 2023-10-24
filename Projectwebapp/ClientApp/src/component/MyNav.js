import './MyNav.css';
import React from 'react';

function MyNav(){
    return(
        <navbar>
            <div class="navbar">
        <div class="logo">Logo</div>
        <ul className='ul-text'>
            
            <li className='main'><a href="/">Main </a></li>
            <li><a href="order">Order</a></li>
            <li><a href="accept">Accepted Order</a></li>
        </ul>
    </div>
        </navbar>
        
    );
}
export default MyNav;