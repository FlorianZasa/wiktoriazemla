import React from 'react'
import { colors } from '../assets/colors'

function ButtonComponent({ text, onClick, secondary=false }) {
  return (
    <button style={{
        backgroundColor: secondary ? colors.white : colors.primary,
        color: secondary ? colors.primary : colors.white,
        width: 'fit-content',
        padding: '.8rem 2rem .8rem 2rem',
        border: `3px solid ${colors.primary}`,
        borderRadius: '10px',
        fontWeight: 800,
        cursor: 'pointer'
    }} onClick={onClick}>
        { text }
    </button>
  )
}

export default ButtonComponent