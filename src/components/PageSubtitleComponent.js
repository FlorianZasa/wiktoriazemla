import React from 'react'
import { colors } from '../assets/colors'

function PageSubtitleComponent({ title, size='big', centered=false }) {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: centered && 'center'
        }}>
            <h2 style={{
                borderBottom: size === 'big' ? `12px solid ${colors.primary}` : `10px solid ${colors.primary}`,
                textAlign: 'center',
                width: 'fit-content',
                borderRadius: 4,
                fontSize: size === 'big' ? '2rem' : '1.3rem',
                

            }}>{title}&nbsp;&nbsp;&nbsp;</h2>
        </div>
    )
}

export default PageSubtitleComponent