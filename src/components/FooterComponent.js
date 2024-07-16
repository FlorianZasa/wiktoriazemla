import React from 'react'
import { colors } from '../assets/colors'

import InstagramImg from '../assets/instagram.png'
import LinkedInImg from '../assets/linnkedin.png'
import { Link } from 'react-router-dom'

import './FooterComponent.css'

function FooterComponent() {
  return (
    <footer style={{
        backgroundColor: colors.primary,
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        padding: '4rem'
    }}>

        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <a href="https://www.linkedin.com/in/wiktoria-zemla-00a20b252/?originalSubdomain=nl" target="_blank" rel="noreferrer">
                <img src={LinkedInImg} height={40} alt="Linked In" />
            </a>
            <a href="https://www.instagram.com/wiktoria_designwork" target="_blank" rel="noreferrer">
                <img src={InstagramImg} height={40} alt="Instagram" />
            </a>
        </div>

        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/about">About</Link>
            <Link className="footer-link">Contact me</Link>
        </div>
        <br></br>
        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', color: colors.background }}>
            &copy; 2024 Wiktoria Zemla
        </div>
        <div>
            <Link style={{ color: colors.background }}>Privacy</Link>
        </div>



    </footer>
  )
}

export default FooterComponent