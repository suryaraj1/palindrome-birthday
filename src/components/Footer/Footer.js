import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <p className='footer-text'>© | 2021 | Suryaraj</p>
            <div className='footer-social-wrapper'>
                <a className='footer-social' href="https://twitter.com/BhaduriSuryaraj" target="_blank" rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter"/>
                </a>
                <a className='footer-social' href="https://github.com/suryaraj1" target="_blank" rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"/>
                </a>
                <a className='footer-social' href="https://www.linkedin.com/in/suryaraj-bhaduri-a6706b162/" target="_blank" rel="noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;