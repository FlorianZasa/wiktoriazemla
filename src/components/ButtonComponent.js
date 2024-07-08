import React from 'react'
import { colors } from '../assets/colors'

function ButtonComponent({ text, onClick }) {
  return (
    <button style={{
        backgroundColor: colors.primary,
        color: colors.background,
        border: 'none',
        width: 'fit-content',
        padding: '.8rem 2rem .8rem 2rem',
        borderRadius: '10px',
        fontWeight: 800
    }} onClick={onClick}>
        { text }
    </button>
  )
}

export default ButtonComponent