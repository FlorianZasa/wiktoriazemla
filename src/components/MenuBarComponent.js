import React from 'react'
import { colors } from '../assets/colors'
import { Link } from 'react-router-dom'

import './MenuBarComponent.css'

function MenuBarComponent({ backgroundColor, textColor}) {
  return (
    <div style={{
      display: 'flex',
      paddingRight: '6rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      justifyContent: 'flex-end',
      backgroundColor: backgroundColor,
    }}>
        <Link className='menu-btn' to="/" style={{color: textColor}}>Home</Link>
        <Link className='menu-btn' to="/about" style={{color: textColor}}>About</Link>
        <Link className='menu-btn' style={{backgroundColor: colors.primary, color: colors.white, border: '2px solid white'}} to="mailto:wiktoriazemla@gmail.com">Contact me</Link>
    </div>
  )
}

export default MenuBarComponent