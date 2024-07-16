import React from 'react';
import { colors } from '../assets/colors';
import './PageSubtitleComponent.css'

function PageSubtitleComponent({ title, size='big', centered=false, white=false }) {
    const getFontSize = () => {
        switch (size) {
            case 'big':
                return 'clamp(2rem, 5vw, 3rem)';
            case 'small':
                return 'clamp(1.5rem, 4vw, 2rem)';
            case 'mini':
                return 'clamp(1.2rem, 3vw, 1.3rem)';
            default:
                return 'clamp(2rem, 5vw, 3rem)';
        }
    };

    const getBorderBottom = () => {
        switch (size) {
            case 'big':
                return `clamp(8px, 2.5vw, 14px) solid ${colors.secondary}`;
            case 'small':
                return `clamp(4px, 1.5vw, 10px) solid ${colors.secondary}`;
            case 'mini':
                return `clamp(2px, 0.5vw, 8px) solid ${colors.secondary}`;
            default:
                return `clamp(8px, 2.5vw, 14px) solid ${colors.secondary}`;
        }
    };

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: centered ? 'center' : 'flex-start'
        }}>
            <h2 className="page-subtitle" style={{
                borderBottom: getBorderBottom(),
                width: 'fit-content',
                borderRadius: 4,
                fontSize: getFontSize(),
                color: white ? 'white' : 'black'
            }}>{title}&nbsp;&nbsp;</h2>
        </div>
    );
}

export default PageSubtitleComponent;