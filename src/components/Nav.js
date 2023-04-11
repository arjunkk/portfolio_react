import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul className='Nav-ul'>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/Education'>Education</Link> </li>
                <li><Link to='/Skills'>Skills</Link> </li>
                <li><Link to='/Projects'>Projects</Link> </li>
                <li><Link to='/More'>More</Link> </li>
                <li><Link to='/Contact'>Contact</Link> </li>
            </ul>
        </div>
    )
}

export default Nav;