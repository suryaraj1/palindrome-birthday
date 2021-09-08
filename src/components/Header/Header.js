import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <p className='header-text'>Palindrome Birthday</p>
            <p className='header-sub-text'>Check if your birthday is a palindrome 🥳</p>
        </div>
    )
}

export default Header;