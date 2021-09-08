import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <p className='footer-text'>© | 2021 | Suryaraj</p>
            <div className='footer-social-wrapper'>
                <div className='footer-social'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter"/>
                </div>
                <div className='footer-social'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"/>
                </div>
                <div className='footer-social'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin"/>
                </div>
            </div>
            <div className='privacy-notice-wrapper'>
                <p>Privacy Notice - No data is being stored</p>
            </div>
        </div>
    )
}

export default Footer;