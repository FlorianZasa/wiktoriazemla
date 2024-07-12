import React from 'react'
import { colors } from '../assets/colors'
import { Link } from 'react-router-dom'

import './MenuBarComponent.css'

function MenuBarComponent({ backgroundColor, textColor, border}) {
  return (
    <div className="nav-bar" style={{backgroundColor: backgroundColor}}>
        <Link className='menu-btn' to="/" style={{color: textColor}}>Home</Link>
        <Link className='menu-btn' to="/about" style={{color: textColor}}>About</Link>
        <Link className='menu-btn' style={{backgroundColor: colors.primary, color: colors.white, border: border}} to="mailto:contact@wiktoriazemla.com">Contact me</Link>
    </div>
  )
}

export default MenuBarComponent